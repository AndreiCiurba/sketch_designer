function addLine() {
  createLine = createButton('add line');
  createLine.position(w, 550);
  createLine.class('button-21')
  lineDiv = createDiv("Text: ");
  lineDiv.position (w + 100, 560);
  lineText = createInput();
  lineText.position(w + 200,560)
  createLine.mousePressed(function(){
    let count = 0;
    let updateVal = shapes.length;
    let selectedTop, selectedBot;
    for (let i = 0;i < shapes.length; i++){
      if (shapes[i].selected) {
        updateVal = i;
        if (count === 0) {
          selectedTop = shapes[i];
        } else {
          selectedBot = shapes[i];
        }
        count = count + 1;
      }
    }
    if (count !== 2) {
        alert("Please select 2 shapes");
    } else {
      //compareLevels
        if (selectedBot.getLevel() < selectedTop.getLevel()) {
          [selectedBot, selectedTop] = [selectedTop, selectedBot];
        }

        for (linee of lines) {
              //checkTop
            for (parent of linee.top) {
              if (compareShapes(selectedTop, parent)){
                if (linee.top.length === 1) {
                  append(linee.bot, selectedBot)
                  return;
                }
              }
            }
            //checkBot
            for (child of linee.bot) {
              if (compareShapes(selectedBot, child)){
                  if (linee.bot.length === 1) {
                    append(linee.top, selectedTop)
                    return;
                }
              }
            }
          }
        append(lines, new Line([selectedTop], [selectedBot], lineText.value()))
    }
  });
}
