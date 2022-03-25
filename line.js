class Line {
  constructor(top, bot, text) {
    this.top = top;
    this.bot = bot;
    this.text = text;
    this.xOffset = 40;
    this.yOffset = 20;

    this.divLen = 80;
    this.childHead = 50;
    this.topOffset = 50;


  }
  setTop(list) {this.top = list;}
  setBot(list) {this.bot = list;}
  getTop() {return this.top;}
  getBot() {return this.bot;}

  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }

  show() {

    if (this.top.length > 1 && this.bot.length > 1) {
      alert("Can't have many to many relation");
      this.top = [];
      this.bot = [];
      return;
    }

    //one to one
    if (this.top.length == 1 && this.bot.length == 1) {
      if (this.top[0].getLevel() > this.bot[0].getLevel()) {
        let temp = this.top;
        this.top = this.bot;
        this.bot = temp;
      }
        line(this.top[0].x + this.xOffset,this.top[0].y + this.yOffset + this.divLen,
             this.bot[0].x + this.xOffset,this.bot[0].y - this.yOffset);
     }

     //many to one
     //order later
     if (this.top.length > 1 && this.bot.length == 1) {
       for (let item of this.top) {
         line(item.x - item.offsetX, item.y + this.yOffset + this.divLen,
              item.x - item.offsetX, this.bot[0].y - this.topOffset)
       }
       line(this.sidesOfParents()[0] + this.xOffset,this.bot[0].y - this.topOffset,
            this.sidesOfParents()[1] + this.xOffset,this.bot[0].y - this.topOffset)

       line(this.bot[0].x + this.xOffset,this.bot[0].y - this.topOffset,
            this.bot[0].x + this.xOffset,this.bot[0].y - this.yOffset);
      }


      //one to many
      if (this.top.length == 1 && this.bot.length > 1) {
        line(this.top[0].x + this.xOffset,this.top[0].y + this.yOffset + 80,
             this.top[0].x + this.xOffset,this.highestChildYOffset());

        line(this.sidesOfKids()[0] + this.xOffset,this.highestChildYOffset(),
             this.sidesOfKids()[1] + this.xOffset,this.highestChildYOffset());


        for (let item of this.bot) {
          line(item.x - item.offsetX, this.highestChildYOffset(),
               item.x - item.offsetX, item.y - this.yOffset);
        }
     }
  }


highestChildYOffset() {
    let lvl = 99999999;
    for (let item of this.bot) {
      if (item.getLevel() < lvl) {
        lvl = item.getLevel() ;
      }
    }
    return lvl*(window.h/window.levels) - this.childHead;
  }

sidesOfKids() {
    let sides = [window.w, 0];
    for (let item of this.bot) {
      if (item.x < sides[0]) {
        sides[0] = item.x;
      }
      if (item.x > sides[1]) {
        sides[1] = item.x;
      }
    }
    return sides;
  }
lowestParentYOffset() {
    let lvl = -10;
    for (let item of this.top) {
      if (item.getLevel() > lvl) {
        lvl = item.getLevel() + 1;
      }
    }
    return lvl*(window.h/window.levels) + this.divLen;
  }

sidesOfParents() {
    let sides = [window.w, 0];
    for (let item of this.top) {
      if (item.x < sides[0]) {
        sides[0] = item.x;
      }
      if (item.x > sides[1]) {
        sides[1] = item.x;
      }
    }
    return sides;
  }

  released() {
    // Quit dragging
    this.dragging = false;
  }

}
