function isCollapses(px, py, commentX, commentY) { //pacman 1,2,3 numaralı sorulardan birisine geldi mi?
	let distant = dist(px, py, commentX, commentY);
	//		console.log(distant);

	if (distant < 30) {
		return true;

	} else {
		return false;
	}
}

function isInGame() {
//	console.log(inMainGame);

	if (questionNumber >= 3 ) {
		return false
	} else
		return true;

}
