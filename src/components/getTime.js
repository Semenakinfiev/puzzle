

function getTime(tag, timer) {
    let i = 0;
    let seconds = 0;
    let minute = 0; 
 
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

     let strTimer = `${Math.trunc(minute)}:${seconds}`;
     tag.innerHTML = '';
     tag.innerHTML = strTimer;

    }, 1000)
}

export default getTime;