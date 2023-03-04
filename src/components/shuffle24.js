

function shuffle24(arr) {

for(let i=0; i<=1000; i++) {
  let random = Math.ceil(Math.random()*5); 
  const index = arr.indexOf(0); 
  let R = arr[index + 1]; 
  let L = arr[index - 1];
  let D = arr[index + 5];
  let U = arr[index - 5];

  switch(random){
    case 1:
        switch(arr.indexOf(0)){
            case 0:
            case 5:
            case 10:
            case 15:
            case 20:
                arr[index] = R;
                arr[index + 1] = 0;
                break;
            default:
                arr[index - 1] = 0;
                arr[index] = L;
                break;
        }
        break;
    case 2:
        switch(index){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                arr[index] = D;
                arr[index + 5] = 0;
                break;
            default:
                arr[index] = U;
                arr[index - 5] = 0;
                break;
        }
        break;
    case 3:
        switch(index){
            case 4:
            case 9:
            case 14:
            case 19:
            case 24:
                arr[index - 1] = 0;
                arr[index] = L;
                arr[index - 1] = 0;
                break;
            default:
                arr[index] = R;
                arr[index + 1] = 0;
                break;
        }
        break;
    case 4:
        switch(index){
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
                arr[index] = U;
                arr[index - 5] = 0;
                break;
            default:
                arr[index] = D;
                arr[index + 5] = 0;
                break;
        }
    break;
}
}
return arr;
}

export default shuffle24;