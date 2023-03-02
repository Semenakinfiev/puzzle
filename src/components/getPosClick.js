



//функция получает позицию ячейки в массиве в зависимости от координат
function getPosClick(positionOfClickX, positionOfClickY) {
  if(positionOfClickY < 100 && positionOfClickX < 100) {
    return 0;
  }
  if(positionOfClickY < 100 && positionOfClickX > 100 && positionOfClickX < 200) {
    return 1;
  }
  if(positionOfClickY < 100 && positionOfClickX > 200 && positionOfClickX < 300) {
    return 2;
  }
  if(positionOfClickY < 100 && positionOfClickX > 300 && positionOfClickX < 400) {
    return 3;
  }

  if(positionOfClickY > 100 && positionOfClickY <200 && positionOfClickX < 100) {
    return 4;
  }
  if(positionOfClickY > 100 && positionOfClickY <200 && positionOfClickX > 100 && positionOfClickX < 200) {
    return 5;
  }
  if(positionOfClickY > 100 && positionOfClickY <200 && positionOfClickX > 200 && positionOfClickX < 300) {
    return 6;
  }
  if(positionOfClickY > 100 && positionOfClickY <200 && positionOfClickX > 300 && positionOfClickX < 400) {
    return 7;
  }

  if(positionOfClickY > 200 && positionOfClickY <300 && positionOfClickX < 100) {
    return 8;
  }
  if(positionOfClickY > 200 && positionOfClickY <300 && positionOfClickX > 100 && positionOfClickX < 200) {
    return 9;
  }
  if(positionOfClickY > 200 && positionOfClickY <300 && positionOfClickX > 200 && positionOfClickX < 300) {
    return 10;
  }
  if(positionOfClickY > 200 && positionOfClickY <300 && positionOfClickX > 300 && positionOfClickX < 400) {
    return 11;
  }

  if(positionOfClickY > 300 && positionOfClickY <400 && positionOfClickX < 100) {
    return 12;
  }
  if(positionOfClickY > 300 && positionOfClickY <400 && positionOfClickX > 100 && positionOfClickX < 200) {
    return 13;
  }
  if(positionOfClickY > 300 && positionOfClickY <400 && positionOfClickX > 200 && positionOfClickX < 300) {
    return 14;
  }
  if(positionOfClickY > 300 && positionOfClickY <400 && positionOfClickX > 300 && positionOfClickX < 400) {
    return 15;
  }
}

export default getPosClick;