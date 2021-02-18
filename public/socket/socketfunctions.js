var socket = io();

function mouseDragged(){
	fill(0)
	ellipse(mouseX,100,30,30)
	console.log(mouseX);
	socket.emit('mouse',mouseX);
}

 
socket.on("user_pacman_rotation", (data)=>{
    console.log("serverde bir herhangi client pacmanını oynattı ve baktığı yön =  " + data);
});


socket.on("mouse", (data)=>{
    fill(255)
    noStroke();
    ellipse(data,100,30,30)
});
