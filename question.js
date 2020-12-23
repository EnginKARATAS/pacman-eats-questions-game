class Question {
	constructor(comments) {
		this.question = comments[0]; //dizideki yeri 0 2
		this.comments = comments; //commentsin içinde x ve y var
		this.isCollapse = false;
		//        this.size = random(5, 20);
	}

	show(soruTxt, soruX, soruY, commentsQ, commentsX, commentsY) {
		textSize(30);

		 let r = questionNumber*50*0.5;
		 let g = questionNumber*50;
		 let b = questionNumber*153;
		
		//DİSPLAY QUESTİON
		fill(r,g,b);
		textSize(30);
		text(soruTxt, soruX, soruY+150)

		//DİSPLAY COMMENTS
		fill(r,g,b);
		text(commentsQ, commentsX, commentsY);

		fill(255, 0,0);
		text("Kalan Süre: " + timer, windowWidth * 0.70, 50)
		textSize(20);
		text("Skor: " + score, windowWidth * 0.70, 70)

	}



}
