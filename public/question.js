class Question {
	constructor(comments) {
		this.question = comments[0]; //dizideki yeri 0 2
		this.comments = comments; //commentsin içinde x ve y var
		this.isCollapse = false;
		//        this.size = random(5, 20);
	}


	show(soruTxt, soruX, soruY, commentsQ, commentsX, commentsY) {
		fill(ra, ga, ba);

		if (corruptTheGame  || questionNumber == 10 ) {
		fill(ra, ga, ba);
			textSize(60);
			text("Oyun Bitti! Skorunuz " + score, windowWidth*0.14, windowHeight/2)
			text("Yeniden oynamak için F5`e bas", windowWidth*0.14, windowHeight*0.6)
		}
		else{
			textSize(30);

			strokeWeight(0);

			//DİSPLAY QUESTİON
			text(soruTxt, soruX, soruY + 150)
	
			//DİSPLAY COMMENTS
			text(commentsQ, commentsX, commentsY);
	
	
			textSize(20);
			let isFinalForWidth = 0.70;
			let isFinalForHeight = 70;
			let locKalanSure =0.70

			let congrat = "Skor: ";
			if (questionNumber == questionlenght) {
				textSize(40);
				isFinalForWidth = 0.35;
				isFinalForHeight = 150;
				congrat = "Oyun bitti. Skorunuz: ";
				locKalanSure = 5;
			}
			
			text(congrat + score, windowWidth * isFinalForWidth, 70)
			text(questionNumber+1+". Soru", windowWidth * locKalanSure, 90)
			fill(255,66,0)
			text("Kalan Süre: " + timer, windowWidth * locKalanSure, 50)
			
		}

	}



}
