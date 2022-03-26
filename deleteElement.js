function deleteElement() {
  del = createButton('delete');
  del.position(w, 350);
  del.class('button-21')
  del.mousePressed(function(){
    count = 0;
    toDeleteList = []
    for (linee of lines) {
      for (item of linee.top) {
        if (item.selected) {
          append(toDeleteList, count);
        }
        if (item.selected) {
          append(toDeleteList, count);
        }
      }
      count = count + 1;
    }
    toDeleteList.sort();
    for(let i = toDeleteList.length - 1; i>=0; i = i-1) {
      lines.splice(toDeleteList[i], 1);
    }
    for (let i = shapes.length - 1;i >= 0; i--){
      if (shapes[i].selected){
        shapes[i].div.class('none')
        shapes.splice(i,1);
      }
    }
  });
}
