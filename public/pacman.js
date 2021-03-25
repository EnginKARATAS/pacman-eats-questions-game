class Pacman {
	constructor() {
		this.x = 150;
		this.y = 150;
		this.angMouth = 0;
		this.eyeX = 10;
		this.eyeY = 17;
		this.rotation = 0;
		this.angel = 20;
		this.size = 30;
		this.red = 255;
		this.green = 255;
		this.blue = 0;
	}
	eat(pacmanX, pacmanY, dotX, dotY, dotSize) {
		let distance = dist(pacmanX, pacmanY, dotX, dotY);
		if (distance >= 0 && distance < 30) {
			this.size += dotSize;
			return true; //true == shift
		} else {
			if (this.size > 30) {
				this.size -= 0.03; //reduce size
			}
			return false;
		}

	}
	show() {
		//	fill(random(0,255),random(0,255),random(0,255));
		fill(this.red, this.green, this.blue);
		//		translate(this.x, this.y)
		//angleMode(DEGREES);
		arc(this.x, this.y, this.size, this.size, this.rotation + this.angel - cos(this.angMouth) * this.angel, this.rotation - this.angel + cos(this.angMouth) * this.angel);
		this.angMouth += 15; //speed mouth
		fill(random(246, 256), random(20, 100), random(0, 13));
		let biggereye = this.size * 0.02;
		if (this.size == 60 || this.size == 82 && isInGame) {
			score -= 2;
			this.size *= 1.2;
			this.red = random(150, 250);
			this.green = random(150, 250);
			this.blue = 255;

		}

		ellipse(this.x - this.eyeX * biggereye, this.y - this.eyeY * biggereye, 8)
	}
	update(way) {
		
		// socket.emit('user_pacman_rotation',way);

		if (way == 0) {
			this.y -= 5;
			this.rotation = 270;
			this.eyeX = +20;
			this.eyeY = 10;

		} else if (way == 1) {
			this.x += 5;
			this.eyeX = 10;
			this.eyeY = 17;
			this.rotation = 0;

		} else if (way == 2) {
			this.y += 5;

			this.rotation = 90;

		} else if (way == 3) {
			this.x -= 5;
			this.eyeX = 10;
			this.eyeY = 17;
			this.rotation = 180;
		}
	}
}
