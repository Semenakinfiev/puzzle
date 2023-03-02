

function shuffle16(arr) {

for(let i=0; i<=1000; i++) {
  let random = Math.ceil(Math.random()*4); 
  const index = arr.indexOf(0); 
  let R = arr[index + 1]; 
  let L = arr[index - 1];
  let D = arr[index + 4];
  let U = arr[index - 4];

  switch(random){
    case 1:
        switch(arr.indexOf(0)){
            case 0:
            case 4:
            case 8:
            case 12:
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
                arr[index] = D;
                arr[index + 4] = 0;
                break;
            default:
                arr[index] = U;
                arr[index - 4] = 0;
                break;
        }
        break;
    case 3:
        switch(index){
            case 3:
            case 7:
            case 11:
            case 15:
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
            case 12:
            case 13:
            case 14:
            case 15:
                arr[index] = U;
                arr[index - 4] = 0;
                break;
            default:
                arr[index] = D;
                arr[index + 4] = 0;
                break;
        }
    break;
}
}
return arr;
}

export default shuffle16;