const express = require('express');
const app = express(); //listining right now
const nunjucks = require('nunjucks');
const port = process.env.PORT || 8080;
const server = app.listen(port);

app.use(express.static('public'));//client reachs 'public' folder
app.use(express.json({ limit: "1mb" }));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter

// Start socket.io
let socket = require('socket.io');
// Connect it to the web server
let io = socket(server);

//body parsing
nunjucks.configure('public',{
  autoscape: true,
  express: app
})


io.sockets.on('connection', newConnection);
function newConnection(socket) {
  console.log("socket id : "+ socket.id);
  //when mouse message comes, socket.on('mouse',mouseMsg) working
  socket.on('mouse',mouseMsg)
  socket.on('user_pacman_rotation',rotationMsg)

  function rotationMsg(data) {
    // console.log("user pacman rotation get" + data);
    socket.broadcast.emit('user_pacman_rotation', data);
  }

  function mouseMsg(data){
    socket.broadcast.emit('mouse', data);
    //do can be useful for online pacman game?
    // io.socket.emit('mouse', data)
  }
}


//***MONGO-DB*********************************************************** */
const connectionString = 'mongodb+srv://sonaovski:Exo-craft01@cluster0.141km.mongodb.net/revision?retryWrites=true&w=majority';
const MongoClient = require('mongodb').MongoClient
MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {

    console.log('Connected to Database')
    const db = client.db('pacman')
    const questionsCollection = db.collection('questions')

    app.get('/allquestions',(req, res)=> {
      db.collection('questions').find().toArray()
      .then(result=>{
        console.log(result);  
        res.render('allquestions.html',{items:result})})
    })

    app.get('/sa', (req, res) => {
      console.log(db.collection('pacman').find().toArray());
      db.collection('questions').find().toArray()
        .then(result => {
          res.send(result);
        })
    })

    app.post('/api', (req, res) => {
      console.log("api geldi");
      console.log(req.body);
      questionsCollection.insertOne(req.body).catch(err => { console.log(err); })
    })

    app.get('/products', (req, res) => {
      console.log(db.collection('pacman').find().toArray());
      db.collection('questions').find().toArray()
        .then(result => {
          res.send(result);
        })
    })

    app.get('/deleteall', (req, res) => {
      questionsCollection.deleteMany({})
        .then(
          res.send("Tüm sorular silindi"))
        .catch(error => { console.log(error) })

    })

    app.get('/', (req, res) => {
      res.sendFile(__dirname + '\\public' + '\\index.html')
        .catch(error => { console.log(error) });
      // res.sendFile(__dirname + 'index.html')
    })

  })
//**************************************************************** */

   