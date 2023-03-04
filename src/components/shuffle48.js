

function shuffle48(arr) {

for(let i=0; i<=1000; i++) {
  let random = Math.ceil(Math.random()*7); 
  const index = arr.indexOf(0); 
  let R = arr[index + 1]; 
  let L = arr[index - 1];
  let D = arr[index + 7];
  let U = arr[index - 7];

  switch(random){
    case 1:
        switch(arr.indexOf(0)){
            case 0:
            case 7:
            case 14:
            case 21:
            case 28:
            case 35:
            case 42:
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
            case 5:
            case 6:
                arr[index] = D;
                arr[index + 7] = 0;
                break;
            default:
                arr[index] = U;
                arr[index - 7] = 0;
                break;
        }
        break;
    case 3:
        switch(index){
            case 6:
            case 13:
            case 20:
            case 27:
            case 34:
            case 41:
            case 48:
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
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48:
                arr[index] = U;
                arr[index - 7] = 0;
                break;
            default:
                arr[index] = D;
                arr[index + 7] = 0;
                break;
        }
    break;
}
}
return arr;
}

export default shuffle48;