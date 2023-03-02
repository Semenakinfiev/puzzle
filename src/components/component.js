



//функция получает позицию ячейки в массиве в зависимости от координат
function component(myGameArea, width, height, color, x, y, value) {//создание одного квадрата
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.value = value; // параметр для отслеживания

  this.update = function(){
    let ctx = myGameArea.context;
    ctx.fillStyle = "gray";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    if(value == 0) {
      ctx.fillStyle = "gray";
    } else {
      ctx.fillStyle = color;
    }
    ctx.fillRect(this.x+1, this.y+1, this.width-2, this.height-2);
    ctx.font = '30px serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = "gray";
    ctx.fillText(value, (x+50), (y+55));
  }
}

export default component;