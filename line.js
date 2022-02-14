class Line {
  constructor(top, bot, text) {
    this.top = top;
    this.bot = bot;
    this.text = text;
    this.xOffset = 40;
    this.yOffset = 30;
  }

  update() {
    // Adjust location if being dragged
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {
    line(this.top.x + this.xOffset, this.top.y + 2*this.yOffset,
      this.bot.x  + this.xOffset, this.bot.y - this.yOffset);
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }
}
