

function shuffle35(arr) {

for(let i=0; i<=1000; i++) {
  let random = Math.ceil(Math.random()*6); 
  const index = arr.indexOf(0); 
  let R = arr[index + 1]; 
  let L = arr[index - 1];
  let D = arr[index + 6];
  let U = arr[index - 6];

  switch(random){
    case 1:
        switch(arr.indexOf(0)){
            case 0:
            case 6:
            case 12:
            case 18:
            case 24:
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
                arr[index] = D;
                arr[index + 6] = 0;
                break;
            default:
                arr[index] = U;
                arr[index - 6] = 0;
                break;
        }
        break;
    case 3:
        switch(index){
            case 5:
            case 11:
            case 17:
            case 23:
            case 29:
            case 35:
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
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
                arr[index] = U;
                arr[index - 6] = 0;
                break;
            default:
                arr[index] = D;
                arr[index + 6] = 0;
                break;
        }
    break;
}
}
return arr;
}

export default shuffle35;