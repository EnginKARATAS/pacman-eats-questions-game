class Question {
	constructor(comments) {
		this.question = comments[0]; //dizideki yeri 0 2
		this.comments = comments; //commentsin içinde x ve y var
		this.isCollapse = false;
		//        this.size = random(5, 20);
	}

	show(soruTxt, soruX, soruY, commentsQ, commentsX, commentsY) {
		textSize(30);

		fill(0);
		textSize(40);
		
		text(soruTxt, soruX, soruY+150)

		fill(0, 102, 153);
		text(commentsQ, commentsX, commentsY);

		fill(255, 0,0);
		text("Kalan Süre: " + timer, windowWidth * 0.70, 50)
		textSize(20);
		text("Skor: " + score, windowWidth * 0.70, 70)

	}



}
