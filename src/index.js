import './index.scss';

import component from './components/component';
import getPosClick from './components/getPosClick';
import getPosClick9 from './components/getPosClick9';
import shuffle16 from './components/shuffle16';
import shuffle9 from './components/shuffle9';
import checkArr from './components/checkArr';
import mp3 from './assets/sounds/fifteen.mp3'
import silent from './assets/sounds/silent.wav';
import soundOn from './assets/soundOn.svg';
import mute from './assets/mute.svg';
import sound from './components/getSound';
import drawTableWithResults from './components/drawTableWithResults';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const container = document.createElement('div');
wrapper.classList.add('wrapper');
container.classList.add('container');
body.appendChild(wrapper);
wrapper.appendChild(container);

const containerForTime = document.createElement('div');
containerForTime.classList.add('containerForTime');
container.appendChild(containerForTime);

const time = document.createElement('p');
const hour = document.createElement('p');
time.classList.add('time');
hour.classList.add('hour');
time.innerHTML = 'Time:';
hour.innerHTML = '00:00';
containerForTime.appendChild(time);
containerForTime.appendChild(hour);

const containerForMove = document.createElement('div');
containerForMove.classList.add('containerForMove');
container.appendChild(containerForMove);
const move = document.createElement('p');
const moveClicks = document.createElement('p');
move.classList.add('move');
move.innerHTML = 'Move:';
moveClicks.classList.add('moveClicks');
moveClicks.innerHTML = '0';
containerForMove.appendChild(move);
containerForMove.appendChild(moveClicks);

const containerForButtons = document.createElement('div');
containerForButtons.classList.add('containerForButtons');
container.appendChild(containerForButtons);

const size = document.createElement('p');
size.classList.add('size');
size.innerHTML = 'Choose the size of the field to start:';
containerForButtons.appendChild(size);

const button3 = document.createElement('button');
button3.innerHTML = '3x3';
button3.classList.add('button3');
containerForButtons.appendChild(button3);

const button4 = document.createElement('button');
button4.innerHTML = '4x4';
button4.classList.add('button4');
containerForButtons.appendChild(button4);

const button5 = document.createElement('button');
button5.innerHTML = '5x5';
button5.classList.add('button5');
containerForButtons.appendChild(button5);

const button6 = document.createElement('button');
button6.innerHTML = '6x6';
button6.classList.add('button6');
containerForButtons.appendChild(button6);

const button7 = document.createElement('button');
button7.innerHTML = '7x7';
button7.classList.add('button7');
containerForButtons.appendChild(button7);

const button8 = document.createElement('button');
button8.innerHTML = '8x8';
button8.classList.add('button8');
containerForButtons.appendChild(button8);

const containerForSaveAndSound = document.createElement('div');
containerForSaveAndSound.classList.add('containerForSaveAndSound');
container.appendChild(containerForSaveAndSound);

const saveButton = document.createElement('button');
saveButton.innerHTML = 'Save';
saveButton.classList.add('saveButton');
containerForSaveAndSound.appendChild(saveButton);

const resultsButton = document.createElement('button');
resultsButton.innerHTML = 'Results';
resultsButton.classList.add('resultsButton');
containerForSaveAndSound.appendChild(resultsButton);

const resultsTable = document.createElement('table');
resultsTable.classList.add('resultsTable', 'hidden');
container.prepend(resultsTable);

const tr = document.createElement('tr');
resultsTable.prepend(tr);

const thName = document.createElement('th');
thName.innerHTML = 'Name';
tr.appendChild(thName);

const thTime = document.createElement('th');
thTime.innerHTML = 'Time';
tr.appendChild(thTime);

const thMove = document.createElement('th');
thMove.innerHTML = 'Move';
tr.appendChild(thMove);

const soundImg = document.createElement('img');
soundImg.src = soundOn;
soundImg.classList.add('soundImg');
containerForSaveAndSound.appendChild(soundImg);

let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,];
let arr9 = [0,1,2,3,4,5,6,7,8];




let positionElementInWindowX; 
let positionElementInWindowY;
let squares = [];
let squares9 = [];
let positionOfClickX;
let positionOfClickY;
let numberSquare;
let numberSquare9;
let timer;
let counterClicks = 0;
let mySound = new sound(mp3);
let buttons = document.querySelectorAll('button');
let s = 0;
let m = 0;

const myGameArea = { //создание поля для игры
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 400;
    this.canvas.height = 400;
    this.canvas.classList.add('canvas');
    this.context = this.canvas.getContext("2d");
    document.querySelector('.container').prepend(this.canvas);
    positionElementInWindowX = this.canvas.getBoundingClientRect().x;
    positionElementInWindowY = this.canvas.getBoundingClientRect().y;
    this.interval = setInterval(updateGameArea, 20);
  },

  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

const myGameArea9 = { //создание поля для игры
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 300;
    this.canvas.height = 300;
    this.canvas.classList.add('canvas');
    this.context = this.canvas.getContext("2d");
    document.querySelector('.container').prepend(this.canvas);
    positionElementInWindowX = this.canvas.getBoundingClientRect().x;
    positionElementInWindowY = this.canvas.getBoundingClientRect().y;
    this.interval = setInterval(updateGameArea9, 20);
  },

  clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}


function updateGameArea() {
  myGameArea.clear();
  for(let elem of squares) {
    elem.update();
  }
}

function updateGameArea9() {
  myGameArea9.clear();
  for(let elem of squares9) {
    elem.update();
  }
}

function startGame(arr) {
  myGameArea.start();
  drawAllSquares(arr); // при старте запустили функуцию, которая нарисовала все квадраты
  let thisCanvas = document.querySelector('canvas');
  thisCanvas.addEventListener('click', startTimerIfClick);
  }
  

function startGame9(arr9) {
  myGameArea9.start();
  drawAllSquares9(arr9); // при старте запустили функуцию, которая нарисовала все квадраты
  let thisCanvas = document.querySelector('canvas');
  thisCanvas.addEventListener('click', startTimerIfClick);
}

function drawAllSquares(arr) { //функция для добавления объектов с квадратами в массив
  for(let i=0; i<=arr.length-1; i++) {
    
    if(i==0) { // обращаем внимание на индекс и содержанием массива (берем массив с готовыми числами)
      squares[i] = new component(myGameArea, 100, 100, "white", 0, 0, arr[i]); 
    }
    if(i==1) {
      squares[i] = new component(myGameArea, 100, 100, "white", 100, 0, arr[i]);
    }
    if(i==2) {
      squares[i] = new component(myGameArea, 100, 100, "white", 200, 0, arr[i]);
    }
    if(i==3) {
      squares[i] = new component(myGameArea, 100, 100, "white", 300, 0, arr[i]);
    }
    if(i==4) {
      squares[i] = new component(myGameArea, 100, 100, "white", 0, 100, arr[i]);
    }
    if(i==5) {
      squares[i] = new component(myGameArea, 100, 100, "white", 100, 100, arr[i]);
    }
    if(i==6) {
      squares[i] = new component(myGameArea, 100, 100, "white", 200, 100, arr[i]);

    }
    if(i==7) {
      squares[i] = new component(myGameArea, 100, 100, "white", 300, 100, arr[i]);
    }
    if(i==8) {
      squares[i] = new component(myGameArea, 100, 100, "white", 0, 200, arr[i]);
    }
    if(i==9) {
      squares[i] = new component(myGameArea, 100, 100, "white", 100, 200, arr[i]);
    }
    if(i==10) {
      squares[i] = new component(myGameArea, 100, 100, "white", 200, 200, arr[i]);
    }
    if(i==11) {
      squares[i] = new component(myGameArea, 100, 100, "white", 300, 200, arr[i]);
    }
    if(i==12) {
      squares[i] = new component(myGameArea, 100, 100, "white", 0, 300, arr[i]);
    }
    if(i==13) {
      squares[i] = new component(myGameArea, 100, 100, "white", 100, 300, arr[i]);
    }
    if(i==14) {
      squares[i] = new component(myGameArea, 100, 100, "white", 200, 300, arr[i]);
    }
    if(i==15) {
      squares[i] = new component(myGameArea, 100, 100, "white", 300, 300, arr[i]);
    }
  }
 }

 function drawAllSquares9(arr9) { //функция для добавления объектов с квадратами в массив
   for(let i=0; i<=arr9.length-1; i++) {
     if(i==0) { 
      squares9[i] = new component(myGameArea9, 100, 100, "white", 0, 0, arr9[i]); 
     }
     if(i==1) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 100, 0, arr9[i]);
     }
     if(i==2) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 200, 0, arr9[i]);
     }
     if(i==3) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 0, 100, arr9[i]);
     }
     if(i==4) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 100, 100, arr9[i]);
     }
     if(i==5) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 200, 100, arr9[i]);
     }
     if(i==6) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 0, 200, arr9[i]);
     }
     if(i==7) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 100, 200, arr9[i]);
     }
     if(i==8) {
      squares9[i] = new component(myGameArea9, 100, 100, "white", 200, 200, arr9[i]);
     }
  }
}
  

myGameArea.canvas.addEventListener('click', (event) => {
  counterClicks++;
  moveClicks.innerHTML = counterClicks;
  positionOfClickX = event.clientX - positionElementInWindowX; 
  positionOfClickY = event.clientY - positionElementInWindowY;

  numberSquare = squares[getPosClick(positionOfClickX, positionOfClickY)].value;
  let numberSquareInArr;

    for(let i=0; i<=arr.length-1; i++) {//получили позицию квадрата в массиве arr
      if(arr[i] === numberSquare) {
        numberSquareInArr = i;
      }
    }
  
    if(arr[numberSquareInArr - 4] === 0) {
      arr[numberSquareInArr - 4] = arr[numberSquareInArr];
      arr[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares(arr);
    }
  
    if(arr[numberSquareInArr + 4] === 0) {
      arr[numberSquareInArr + 4] = arr[numberSquareInArr];
      arr[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares(arr);
    }
  
    if(arr[numberSquareInArr + 1] === 0 && numberSquareInArr != 3 && //проверка для устранения бага с крайними квадратами
      numberSquareInArr !=7 && numberSquareInArr !=11) {
  
      arr[numberSquareInArr + 1] = arr[numberSquareInArr];
      arr[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares(arr);
    }
  
    if(arr[numberSquareInArr - 1] === 0 && numberSquareInArr != 4 && //проверка для устранения бага с крайними квадратами
      numberSquareInArr !=8 && numberSquareInArr !=12) {
      arr[numberSquareInArr - 1] = arr[numberSquareInArr];
      arr[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares(arr);
  }
  if(checkArr(arr) === true) {
    alert(`Ура! Вы решили головоломку за ${hour.innerHTML} минут и ${moveClicks.innerHTML} ходов!`);

    let name = prompt('What is your name?');
    let moveClick = moveClicks.innerHTML;
    let t = hour.innerHTML;
    
    if(localStorage.getItem('arrResults')) {
      let str = localStorage.getItem('arrResults');
      let arrResults = JSON.parse(str);
      arrResults.push([name, t, moveClick]);
      localStorage.setItem('arrResults', JSON.stringify(arrResults));

    }else {
      let arrResults = [[name, t, moveClick]];
      localStorage.setItem('arrResults', JSON.stringify(arrResults));
    }
    
    drawTableWithResults(resultsTable);

  }
})

myGameArea9.canvas.addEventListener('click', (event) => {
  counterClicks++;
  moveClicks.innerHTML = counterClicks;
  positionOfClickX = event.clientX - positionElementInWindowX; 
  positionOfClickY = event.clientY - positionElementInWindowY;

  numberSquare9 = squares9[getPosClick9(positionOfClickX, positionOfClickY)].value;
  let numberSquareInArr;

    for(let i=0; i<=arr9.length-1; i++) {//получили позицию квадрата в массиве arr
      if(arr9[i] === numberSquare9) { //записали в масив по индексу значение квардрата по которому клик
        numberSquareInArr = i;
      }
    }

    if(arr9[numberSquareInArr - 3] === 0) {
      arr9[numberSquareInArr - 3] = arr9[numberSquareInArr];
      arr9[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares9(arr9);
    }
  
    if(arr9[numberSquareInArr + 3] === 0) {
      arr9[numberSquareInArr + 3] = arr9[numberSquareInArr];
      arr9[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares9(arr9);
    }
  
    if(arr9[numberSquareInArr + 1] === 0 && numberSquareInArr != 2 && //проверка для устранения бага с крайними квадратами
      numberSquareInArr !=5 && numberSquareInArr !=8) {
  
      arr9[numberSquareInArr + 1] = arr9[numberSquareInArr];
      arr9[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares9(arr9);
    }
  
    if(arr9[numberSquareInArr - 1] === 0 && numberSquareInArr != 3 && //проверка для устранения бага с крайними квадратами
      numberSquareInArr !=6) {
      arr9[numberSquareInArr - 1] = arr9[numberSquareInArr];
      arr9[numberSquareInArr] = 0;
      mySound.play();
      drawAllSquares9(arr9);
    }

    if(checkArr(arr9) === true) {
      alert(`Ура! Вы решили головоломку за ${hour.innerHTML} минут и ${moveClicks.innerHTML} ходов!`)
    }
})


button3.addEventListener('click', function() {
  myGameArea.canvas.remove();
  shuffle9(arr9);
  startGame9(arr9);
  counterClicks = 0;
  moveClicks.innerHTML = counterClicks;
  clearInterval(timer);
  for(let elem of buttons) {
    elem.classList.remove('active');
  }
  button3.classList.add('active');
  hour.innerHTML = '00:00';

  localStorage.clear();

  saveButton.addEventListener('click', function() {
    localStorage.clear();
    localStorage.setItem('arr9', JSON.stringify(arr9));
    localStorage.setItem('time', JSON.stringify(hour.innerHTML));
    localStorage.setItem('counterClicks', JSON.stringify(counterClicks));
  })

})

button4.addEventListener('click', function() {
  myGameArea9.canvas.remove();
  
  startGame(arr);
  counterClicks = 0;
  moveClicks.innerHTML = counterClicks;
  clearInterval(timer);
  for(let elem of buttons) {
    elem.classList.remove('active');
  }
  button4.classList.add('active');
  hour.innerHTML = '00:00';

  localStorage.clear();
  shuffle16(arr);
})

soundImg.addEventListener('click', function() {
  if(soundImg.src == soundOn) {
    soundImg.src = mute;
    mySound = new sound(silent);
  } else {
    soundImg.src = soundOn;
    mySound = new sound(mp3);
  }
})

 function startTimerIfClick() {
  let i = s;
  let seconds = i;
  let minute = m; 
      timer = setInterval(function () {
        i++;
        seconds = i;
        if(seconds>59) {
            seconds = 0;
            i = 0;
        }
        if(seconds>=59) {
            minute++;
        } 
        let strTimer = `${Math.trunc(minute)<=0 ? '0' + Math.trunc(minute) : Math.trunc(minute)}:${seconds<=9 ? '0' + seconds : seconds}`;
        hour.innerHTML = '';
        hour.innerHTML = strTimer;
    }, 1000)
    
    this.removeEventListener('click', startTimerIfClick);
  }

resultsButton.addEventListener('click', function() {
  resultsTable.classList.toggle('hidden');
})

  window.addEventListener('load', () => {
   //localStorage.clear();

    saveButton.addEventListener('click', function() {
      localStorage.setItem('arr', JSON.stringify(arr));
      localStorage.setItem('time', JSON.stringify(hour.innerHTML));
      localStorage.setItem('counterClicks', JSON.stringify(counterClicks));
    })

    if(localStorage.getItem('arr')) {
      arr = JSON.parse(localStorage.getItem('arr'));
      hour.innerHTML = JSON.parse(localStorage.getItem('time'));
      counterClicks = 0;
      counterClicks = JSON.parse(localStorage.getItem('counterClicks'));
      moveClicks.innerHTML = counterClicks;
      s = hour.innerHTML.split(':')[1];
      m = hour.innerHTML.split(':')[0];
      for(let elem of buttons) {
        elem.classList.remove('active');
      }
      button4.classList.add('active');
      startGame(arr);
    } else if(localStorage.getItem('arr9')) {
      arr9 = JSON.parse(localStorage.getItem('arr9'));
      hour.innerHTML = JSON.parse(localStorage.getItem('time'));
      counterClicks = JSON.parse(localStorage.getItem('counterClicks'));
      moveClicks.innerHTML = counterClicks;
      s = hour.innerHTML.split(':')[1];
      m = hour.innerHTML.split(':')[0];
      for(let elem of buttons) {
        elem.classList.remove('active');
      }
      button3.classList.add('active');
      startGame9(arr9);
    } else {
      //  arr = shuffle16([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,]);
        arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,];
        startGame(arr);
        for(let elem of buttons) {
          elem.classList.remove('active');
        }
        button4.classList.add('active');

    }

    moveClicks.innerHTML = counterClicks;

    drawTableWithResults(resultsTable);
  
    })
  

  
