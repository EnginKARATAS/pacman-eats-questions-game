//server codes index.js
const fs = require('fs') //filestream
const express = require('express');
const app = express(); //listining right now
const port = process.env.PORT || 8000;
const nunjucks = require('nunjucks');

app.listen(port, () => console.log("listening at 8000")); //3000 de dinleyeceğim
app.use(express.static('public'));//kullanıcı tarafından erişilebilecek dosya 'public'dir.
app.use(express.json({ limit: "1mb" }));//server allows json and taken data size max 1mb, If this row not exist it will be undifined for request parameter

nunjucks.configure('public',{
  autoscape: true,
  express: app
})

//***DB*********************************************************** */
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

    // app.get('/', (req, res) => {
    //   res.sendFile(__dirname +'\\public' +'\\indexs.html')

    //   db.collection('questions').find().toArray()
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {console.log(error)});
    //   // res.sendFile(__dirname + 'index.html')
    // })
