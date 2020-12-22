let way = 4; //0:up 1:right 2:down 3:left
let score = 0;
let pacman;
//let questions = [];
let questions = [];
let isInGame = false;
var timer = 0;

var questionNumber = 0;
var soruNo = 0;



function setup() {
	createCanvas(700, 500);
	angleMode(DEGREES);
	pacman = new Pacman();
	//	width * 0.1,height * 0.2
	let soru1 = new Question([[150, 300, "soru1geldi"], [50, 50, "yorum11"], [200, 50, "yorum12"], [350, 50, "yorum13"]]);
	let soru2 = new Question([[150, 300, "soru2geldi"], [50, 50, "yorum21"], [200, 50, "yorum22"], [350, 50, "yorum23"]]);
	let soru3 = new Question([[250, 300, "soru3geldi"], [50, 50, "31"], [200, 50, "yorum32"], [350, 50, "yorum33"]]);
	let soru4 = new Question([[350, 300, "soru4geldi"], [50, 50, "41"], [200, 50, "yorum42"], [350, 50, "yorum43"]]);


	questions.push(soru1);
	questions.push(soru2);
	questions.push(soru3);
	questions.push(soru4);



}

function draw() {
	//translate(pacman.x,pacman.y);//pacmanı hızlandırıyor neden bilmiyorum
	background(0);


	//for soru numarası = questionNumber
	for (let yorum = 0; yorum < 3; yorum++) {
		let soruX = questions[questionNumber].question[0];
		let soruY = questions[questionNumber].question[1];
		let soruTxt = questions[questionNumber].question[2];
		let commentsX = questions[questionNumber].comments[yorum + 1][0];
		let commentsY = questions[questionNumber].comments[yorum + 1][1];
		let commentsQ = questions[questionNumber].comments[yorum + 1][2];


		questions[questionNumber].show(soruTxt, soruX, soruY, commentsQ, commentsX, commentsY, yorum)


		if (isCollapses(pacman.x, pacman.y,commentsX,commentsY)) { //if collapse
			//				pacman.x = 50;
			//				pacman.y = 200;
			//				way = 5;
			//				score++;
			//				questionNumber++;
			//				//			questions.splice(a,1);,
			//	
		}
	}

	pacman.show(isInGame);
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
