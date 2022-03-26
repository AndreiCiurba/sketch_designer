function arrangeElement() {
  arrange = createButton('arrange');
  arrange.position(w, 400);
  arrange.class('button-21')
  arrange.mousePressed(function(){
    for (let i = 0;i < levels; i++){
      empty_array = []
      append(shapesPerLevel, empty_array)
    }
    let crtLevel;
    for (let i = 0;i < shapes.length; i++){
      crtLevel = shapes[i].getLevel(levels, h);
      append(shapesPerLevel[crtLevel], shapes[i]);
    }
    let x_val, y_val;
    for (let k = 0;k < levels; k++){
        let len = shapesPerLevel[k].length;
        let crtArray = shapesPerLevel[k]
        //sort array
        for(var jj = 0; jj < len; jj++){
         for(var j = 0; j < ( len - jj -1 ); j++){
           if(crtArray[j].x > crtArray[j+1].x){
             var temp = crtArray[j]
             crtArray[j] = crtArray[j + 1]
             crtArray[j+1] = temp
           }
         }
       }
        for (let i = 0;i < len; i++){
            x_val = (i+ 1) * w/(len+1) - w/16;
            y_val = (k + 1)*h/levels - 3*h/(4*levels);
            crtArray[i].move(x_val, y_val);
        }
    }
    shapesPerLevel = []
  });
}
