class Question {
	constructor(comments) {
		this.question = comments[0]; //dizideki yeri 0 2
		this.comments = comments; //commentsin içinde x ve y var
		this.isCollapse = false;


		//        this.size = random(5, 20);
	}

	show(soruTxt, soruX, soruY, commentsQ, commentsX, commentsY) {
		textSize(18);
		fill(255);
		text(soruTxt, soruX, soruY)

		text(commentsQ, commentsX, commentsY);
	}



}
