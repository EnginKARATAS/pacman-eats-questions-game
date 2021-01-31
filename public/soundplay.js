class Doorbell {
    constructor(x_, y_, r_) {
      // Location and size
      this.x = x_;
      this.y = y_;
      this.r = r_;
    }
    // Is a point inside the doorbell? (used for mouse rollover, etc.)
    contains(mx, my) {
      return dist(mx, my, this.x, this.y) < this.r;
    }
  
    // Show the doorbell (hardcoded colors, could be improved)
    display(mx, my) {
      if (this.contains(mx, my)) {
        fill(100);
      } else {
        fill(175);
      }
      stroke(0);
      strokeWeight(4);
      ellipseMode(RADIUS);
      ellipse(this.x, this.y, this.r, this.r);
    }
  }