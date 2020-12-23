let way = 4; //0:up 1:right 2:down 3:left
let score = 0;
let pacman;
//let questions = [];
let questions = [];
let isIn = false;
var timer = 20;

var questionNumber = 0;
var soruNo = 0;

let inMainGame = true;

//sound
let playMode = 'sustain';
let song;
let deger = false;

function preload() {
	song = loadSound('sound/beginning.wav');
}

function mousePressed() {
 
}



function setup() {
	createCanvas(windowWidth, windowHeight * 0.98);
	angleMode(DEGREES);
	song.loop();
	
	  
	 
		
	   


	pacman = new Pacman();
	//	width * 0.1,height * 0.2
	let displayY = windowHeight;
	let displayX = windowWidth;
	let defaultY = displayY * 0.12
	let soru1 = new Question([
		[150, 300, "Türkiyenin yüz ölçümü en büyük ilimiz hangisidir?"],
		[windowWidth * 0.1, defaultY, "Konya"],
		[windowWidth * 0.3, defaultY, "Ankra"],
		[windowWidth * 0.5, defaultY, "Kocaeli"]]);

	let soru2 = new Question([
		[150, 300, "Duvara asılı bir haritanın sağı her zaman hangi yönü gösterir ?"],
		[windowWidth * 0.4, displayY * 0.25, "Kuzey"],
		[windowWidth * 0.5, displayY * 0.35, "Doğu"],
		[windowWidth * 0.32, displayY * 0.35, "Batı"]]);

	let soru3 = new Question([
		[150, 300, "Bilinen ilk evcilleştirilmiş hayvan aşağıdakilerden hangisidir ?"],
		[windowWidth * 0.1, defaultY, "Köpek"],
		[windowWidth * 0.3, defaultY, "Koyun"],
		[windowWidth * 0.5, defaultY, "Mamut"]]);

	let soru4 = new Question(
		[[150, 300, "İstiklal Şairi olarak anılan şair aşağıdakilerden hangisidir?"],
		[windowWidth * 0.1, defaultY, "Mehmet Akif Ersoy"],
		[windowWidth * 0.4, defaultY, "Yahya Kemal Beyatlı"],
		[windowWidth * 0.5, defaultY, ""]]);


	questions.push(soru1);
	questions.push(soru2);
	questions.push(soru3);
	questions.push(soru4);


}

function draw() {
	//translate(pacman.x,pacman.y);//pacmanı hızlandırıyor neden bilmiyorum
	background(240);
	// c = color('#04052af5');
	// background(c);

			
 



	//for soru numarası = questionNumber
	for (let yorum = 0; yorum < 3; yorum++) {
		let soruX = questions[questionNumber].question[0];
		let soruY = questions[questionNumber].question[1];
		let soruTxt = questions[questionNumber].question[2];
		let commentsX = questions[questionNumber].comments[yorum + 1][0];
		let commentsY = questions[questionNumber].comments[yorum + 1][1];
		let commentsQ = questions[questionNumber].comments[yorum + 1][2];


		questions[questionNumber].show(soruTxt, soruX, soruY, commentsQ, commentsX, commentsY, yorum)


		if (isCollapses(pacman.x, pacman.y, commentsX, commentsY)) { //if collapse
			song.pause();
			if (commentsQ == "Konya") {
				score++;
			}
			pacman.x = 50;
			pacman.y = 200;
			way = 5;
			timer = 20;
			questionNumber++;

		}
	}
	if (frameCount % 60 == 0) {
		timer--;
	}
	pacman.show(isIn);
	pacman.update(way);


}



function keyPressed() {
	if (keyCode === UP_ARROW) {
		way = 0;
	}
	if (keyCode === RIGHT_ARROW) {
		way = 1;
	}
	if (keyCode === DOWN_ARROW) {
		way = 2;
	}
	if (keyCode === LEFT_ARROW) {
		way = 3;
	}
}
