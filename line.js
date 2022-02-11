class Line {
  constructor(top, bottom, text) {
    this.top = top;
    this.bottom = bottom;
    this.text = text;
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    line(this.top.x, this.top.y, this.bot.x, this.bot.y);
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
