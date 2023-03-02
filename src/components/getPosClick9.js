



//функция получает позицию ячейки в массиве в зависимости от координат
function getPosClick9(positionOfClickX, positionOfClickY) {
  if(positionOfClickY < 100 && positionOfClickX < 100) {
    return 0;
  }
  if(positionOfClickY < 100 && positionOfClickX > 100 && positionOfClickX < 200) {
    return 1;
  }
  if(positionOfClickY < 100 && positionOfClickX > 200 && positionOfClickX < 300) {
    return 2;
  }


  if(positionOfClickY > 100 && positionOfClickY <200 && positionOfClickX < 100) {
    return 3;
  }
  if(positionOfClickY > 100 && positionOfClickY <200 && positionOfClickX > 100 && positionOfClickX < 200) {
    return 4;
  }
  if(positionOfClickY > 100 && positionOfClickY <200 && positionOfClickX > 200 && positionOfClickX < 300) {
    return 5;
  }


  if(positionOfClickY > 200 && positionOfClickY <300 && positionOfClickX < 100) {
    return 6;
  }
  if(positionOfClickY > 200 && positionOfClickY <300 && positionOfClickX > 100 && positionOfClickX < 200) {
    return 7;
  }
  if(positionOfClickY > 200 && positionOfClickY <300 && positionOfClickX > 200 && positionOfClickX < 300) {
    return 8;
  }
  
}

export default getPosClick9;