



//функция получает позицию ячейки в массиве в зависимости от координат
function getPosClick48(positionOfClickX, positionOfClickY) {
  if(positionOfClickY < 50 && positionOfClickX < 50) {
    return 0;
  }
  if(positionOfClickY < 50 && positionOfClickX > 50 && positionOfClickX < 100) {
    return 1;
  }
  if(positionOfClickY < 50 && positionOfClickX > 100 && positionOfClickX < 150) {
    return 2;
  }
  if(positionOfClickY < 50 && positionOfClickX > 150 && positionOfClickX < 200) {
    return 3;
  }
  if(positionOfClickY < 50 && positionOfClickX > 200 && positionOfClickX < 250) {
    return 4;
  }
  if(positionOfClickY < 50 && positionOfClickX > 250 && positionOfClickX < 300) {
    return 5;
  }
  if(positionOfClickY < 50 && positionOfClickX > 300 && positionOfClickX < 350) {
    return 6;
  }

  if(positionOfClickY > 50 && positionOfClickY <100 && positionOfClickX < 50) {
    return 7;
  }
  if(positionOfClickY > 50 && positionOfClickY <100 && positionOfClickX > 50 && positionOfClickX < 100) {
    return 8;
  }
  if(positionOfClickY > 50 && positionOfClickY <100 && positionOfClickX > 100 && positionOfClickX < 150) {
    return 9;
  }
  if(positionOfClickY > 50 && positionOfClickY <100 && positionOfClickX > 150 && positionOfClickX < 200) {
    return 10;
  }
  if(positionOfClickY > 50 && positionOfClickY <100 && positionOfClickX > 200 && positionOfClickX < 250) {
    return 11;
  }
  if(positionOfClickY > 50 && positionOfClickY <100 && positionOfClickX > 250 && positionOfClickX < 300) {
    return 12;
  }
  if(positionOfClickY > 50 && positionOfClickY <100 && positionOfClickX > 300 && positionOfClickX < 350) {
    return 13;
  }

  if(positionOfClickY > 100 && positionOfClickY <150 && positionOfClickX < 50) {
    return 14;
  }
  if(positionOfClickY > 100 && positionOfClickY <150 && positionOfClickX > 50 && positionOfClickX < 100) {
    return 15;
  }
  if(positionOfClickY > 100 && positionOfClickY <150 && positionOfClickX > 100 && positionOfClickX < 150) {
    return 16;
  }
  if(positionOfClickY > 100 && positionOfClickY <150 && positionOfClickX > 150 && positionOfClickX < 200) {
    return 17;
  }
  if(positionOfClickY > 100 && positionOfClickY <150 && positionOfClickX > 200 && positionOfClickX < 250) {
    return 18;
  }
  if(positionOfClickY > 100 && positionOfClickY <150 && positionOfClickX > 250 && positionOfClickX < 300) {
    return 19;
  }
  if(positionOfClickY > 100 && positionOfClickY <150 && positionOfClickX > 300 && positionOfClickX < 350) {
    return 20;
  }

  if(positionOfClickY > 150 && positionOfClickY <200 && positionOfClickX < 50) {
    return 21;
  }
  if(positionOfClickY > 150 && positionOfClickY <200 && positionOfClickX > 50 && positionOfClickX < 100) {
    return 22;
  }
  if(positionOfClickY > 150 && positionOfClickY <200 && positionOfClickX > 100 && positionOfClickX < 150) {
    return 23;
  }
  if(positionOfClickY > 150 && positionOfClickY <200 && positionOfClickX > 150 && positionOfClickX < 200) {
    return 24;
  }
  if(positionOfClickY > 150 && positionOfClickY <200 && positionOfClickX > 200 && positionOfClickX < 250) {
    return 25;
  }
  if(positionOfClickY > 150 && positionOfClickY <200 && positionOfClickX > 250 && positionOfClickX < 300) {
    return 26;
  }
  if(positionOfClickY > 150 && positionOfClickY <200 && positionOfClickX > 300 && positionOfClickX < 350) {
    return 27;
  }

  if(positionOfClickY > 200 && positionOfClickY <250 && positionOfClickX < 50) {
    return 28;
  }
  if(positionOfClickY > 200 && positionOfClickY <250 && positionOfClickX > 50 && positionOfClickX < 100) {
    return 29;
  }
  if(positionOfClickY > 200 && positionOfClickY <250 && positionOfClickX > 100 && positionOfClickX < 150) {
    return 30;
  }
  if(positionOfClickY > 200 && positionOfClickY <250 && positionOfClickX > 150 && positionOfClickX < 200) {
    return 31;
  }
  if(positionOfClickY > 200 && positionOfClickY <250 && positionOfClickX > 200 && positionOfClickX < 250) {
    return 32;
  }
  if(positionOfClickY > 200 && positionOfClickY <250 && positionOfClickX > 250 && positionOfClickX < 300) {
    return 33;
  }
  if(positionOfClickY > 200 && positionOfClickY <250 && positionOfClickX > 300 && positionOfClickX < 350) {
    return 34;
  }

  if(positionOfClickY > 250 && positionOfClickY <300 && positionOfClickX < 50) {
    return 35;
  }
  if(positionOfClickY > 250 && positionOfClickY <300 && positionOfClickX > 50 && positionOfClickX < 100) {
    return 36;
  }
  if(positionOfClickY > 250 && positionOfClickY <300 && positionOfClickX > 100 && positionOfClickX < 150) {
    return 37;
  }
  if(positionOfClickY > 250 && positionOfClickY <300 && positionOfClickX > 150 && positionOfClickX < 200) {
    return 38;
  }
  if(positionOfClickY > 250 && positionOfClickY <300 && positionOfClickX > 200 && positionOfClickX < 250) {
    return 39;
  }
  if(positionOfClickY > 250 && positionOfClickY <300 && positionOfClickX > 250 && positionOfClickX < 300) {
    return 40;
  }
  if(positionOfClickY > 250 && positionOfClickY <300 && positionOfClickX > 300 && positionOfClickX < 350) {
    return 41;
  }

  if(positionOfClickY > 300 && positionOfClickY <350 && positionOfClickX < 50) {
    return 42;
  }
  if(positionOfClickY > 300 && positionOfClickY <350 && positionOfClickX > 50 && positionOfClickX < 100) {
    return 43;
  }
  if(positionOfClickY > 300 && positionOfClickY <350 && positionOfClickX > 100 && positionOfClickX < 150) {
    return 44;
  }
  if(positionOfClickY > 300 && positionOfClickY <350 && positionOfClickX > 150 && positionOfClickX < 200) {
    return 45;
  }
  if(positionOfClickY > 300 && positionOfClickY <350 && positionOfClickX > 200 && positionOfClickX < 250) {
    return 46;
  }
  if(positionOfClickY > 300 && positionOfClickY <350 && positionOfClickX > 250 && positionOfClickX < 300) {
    return 47;
  }
  if(positionOfClickY > 300 && positionOfClickY <350 && positionOfClickX > 300 && positionOfClickX < 350) {
    return 48;
  }
}

export default getPosClick48;