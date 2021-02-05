let questionlenght;//question number will equal in ajax to incoming database response.lenght 

let data;

let way = 4; //0:up 1:right 2:down 3:left
let score = 0;
let pacman;
//let questions = [];
let questions = [];
let isIn = false;
var timer = 15;
let trueBaloons = ["🔴<--Başla"];

//color
let ra = 255;
let ga = 244;
let ba = 203;

//timer check
corruptTheGame = false;

var questionNumber = 0;
var soruNo = 0;

let inMainGame = true;

//sound
let playMode = 'sustain';
let song;

//fireworks
const fireworks = [];
let gravity;

function preload() {
	// song = loadSound('main.wav');
}

function setup() {


	createCanvas(windowWidth, windowHeight * 0.98);
	frameRate(45)
	angleMode(DEGREES);


	//song
	// song.loop();

	//fireworks
	gravity = createVector(0, 0.2);

	//default
	pacman = new Pacman();

	//	width * 0.1,height * 0.2
	let displayY = windowHeight;
	let displayX = windowWidth;
	let defaultY = displayY * 0.12

	$.ajax({
		url: '/products',
		contentType: 'application/json',
		success: function (response) {
			questionlenght = response.length + 1;

			data = response

			for (let i = 0; i < response.length; i++) {

				const questionXY = response[i].locations[0]
				//questionlocationXY[0] = X 
				//questionlocationXY[1] = Y and valid in baloon..
				const baloon1XY = response[i].locations[1]
				const baloon2XY = response[i].locations[2]
				const baloon3XY = response[i].locations[3]
				const trueBaloonsget = response[i].arrdogrusorular//[xxx,yyy,zzz]
				for (let j = 0; j < trueBaloonsget.length; j++) {
					trueBaloons.push(trueBaloonsget[j]);
				}
				questions.push(
					new Question(
						[
							[questionXY[0], questionXY[1], response[i].questionPool],
							[baloon1XY[0], baloon1XY[1], response[i].baloonPool[0]],
							[baloon2XY[0], baloon2XY[1], response[i].baloonPool[1]],
							[baloon3XY[0], baloon3XY[1], response[i].baloonPool[2]],
						],
					)
				)
			}


			let lastquest = new Question([
				[200, 300, " "],
				[120, 100, " "],
				[400, 100, " "],
				[680, 100, " "]]
			);

			questions.push(lastquest)


		}
	})

	// ArrDogrular = ["Konya", "Doğu", "Köpek", "Mehmet Akif Ersoy", "7(Yedi)", "Tibet Takvimi", "Çobanlar", "Köpek", "Sert", "Kabakulak"];

	let firsquest = new Question([
		[200, 200, "Pacman oyununa hoşgeldin"],
		[400, 400, "Şimdiki amacın zamanında doğru şıkları yemek "],
		[400, 200, "🔴<--Başla"],
		[680, 100, ""]]);

	questions.push(firsquest)

}

function draw() {
	//translate(pacman.x,pacman.y);//pacmanı hızlandırıyor neden bilmiyorum
	if (!corruptTheGame)
		background(ra / 1.5, ga / 1.8, ba / 2, 60);
	if (corruptTheGame || (questionNumber == questionlenght)) {
		background(0);
	}



	// c = color('#04052af5');
	// background(c);

	//time control if 0
	if (timer <= 0)
		corruptTheGame = true;
	else
		corruptTheGame = false;


	//fireworks
	for (let i = fireworks.length - 1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();

		if (fireworks[i].done()) {
			fireworks.splice(i, 1);
		}
	}

	//for soru numarası = questionNumber
	for (let yorum = 0; yorum < 3; yorum++) {

		let soruX = questions[questionNumber].question[0];
		let soruY = questions[questionNumber].question[1];
		let soruTxt = questions[questionNumber].question[2];
		let commentsX = questions[questionNumber].comments[yorum + 1][0];
		let commentsY = questions[questionNumber].comments[yorum + 1][1];
		let commentsQ = questions[questionNumber].comments[yorum + 1][2];

		questions[questionNumber].show(soruTxt, soruX, soruY, commentsQ, commentsX, commentsY, yorum)


		// console.log(rect(commentsX,commentsY,commentsQ.length*15,-23).pwinMouseX);
		//x2 questionun lenghti  x1,x2,pacx,pacy,y1

		// isCollapsesX(commentsX, commentsX+commentsQ.length * 15,pacman.x,pacman.y,commentsY,commentsQ);
		//(isCollapses(pacman.x, pacman.y, commentsX, commentsY)
		if (isCollapses(commentsX, commentsX + commentsQ.length * 15, pacman.x, pacman.y, commentsY, commentsQ)) { //if collapse
			//colors
			ra = random(255);
			ga = random(255);
			ba = random(255);

			//commentsQ = answer
			if (trueBaloons.includes(commentsQ)) {
				if (questionNumber==0) {
					//Do nothing. question number ++ 
				}
				else {
					fireworks.push(new Firework());
					fireworks.push(new Firework());
					fireworks.push(new Firework());

					score += 5;
					pacman.size += 10;
				}
			}
			else {
				score -= 2;
				pacman.size -= 2;

			}
			pacman.x = 50;
			pacman.y = 200;
			way = 5;
			timer = 15;
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
