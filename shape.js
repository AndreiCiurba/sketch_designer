// Click and Drag an object
let size = 50;

class Shape {
  constructor(x, y, icon, name, country) {
    this.dragging = false;
    this.x = x;
    this.y = y;

    this.offsetX = 0;
    this.offsetY = 0;
    this.icon = icon;
    this.name = name;
    this.country = country;
    this.div = createDiv(
      "<i class=\"shape " + icon + "\"></i>" +
      "<div class=\"shape name\">" + name + "</div>" +
      "<div class=\"shape country\">" + country + "</div>")
  }
  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    stroke(0);
    // Different fill based on state

    // this.div.updateDiv(this.icon, this.name, this.country)
    this.div.position(this.x, this.y);
  }

  pressed() {
    // Did I click on the rectangle?
    if (mouseX > this.x && mouseX < this.x + size  && mouseY > this.y && mouseY < this.y + size) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }


  hide(){
    this.x = -100;
    this.y = -100;
  }


  getLevel(levels, height) {
    let i;
    for (i = 0;i < levels; i++){
      if (this.y < (i + 1)*h/levels){
        break;
      }
    }
    return i
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
