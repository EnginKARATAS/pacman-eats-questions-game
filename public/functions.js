// function isCollapses(px, py, commentX, commentY) { //pacman 1,2,3 numaralı sorulardan birisine geldi mi?
// 	let distant = dist(px, py, commentX, commentY);
// 			console.log(distant);

// 	if (distant < 30) {
// 		return true;

// 	} else {
// 		return false;
// 	}
// }

//x2 questionun lenghti  x1,x2,pacx,pacy,y1
function isCollapses(x1, x2, pacx, pacy, y1, commentQ) { //X ekseninde sorunun ne kadar uzandığının kontrolü?
	let buyukx1 = pacx > x1;
	let kucukx2 = pacx < x2;
	let buyuky = pacy > y1 - 23;
	let kucuky = pacy < y1 + 23;
	if (buyukx1 && kucukx2 && buyuky && kucuky)
		return true
	else
		return false
}

function isCollapsesY(y1, pacy) { //X ekseninde sorunun ne kadar uzandığının kontrolü?

	return Math.floor(y1 - pacy);
}


function isInGame() {
	//	console.log(inMainGame);

	if (questionNumber >= 3) {
		return false
	} else
		return true;

}
