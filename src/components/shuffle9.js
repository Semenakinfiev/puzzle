

function shuffle9(arr) {

for(let i=0; i<=1000; i++) {
  let random = Math.ceil(Math.random()*3); 
  const index = arr.indexOf(0); 
  let R = arr[index + 1]; 
  let L = arr[index - 1];
  let D = arr[index + 3];
  let U = arr[index - 3];

  switch(random){
    case 1:
        switch(arr.indexOf(0)){
            case 0:
            case 3:
            case 6:
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
                arr[index] = D;
                arr[index + 3] = 0;
                break;
            default:
                arr[index] = U;
                arr[index - 3] = 0;
                break;
        }
        break;
    case 3:
        switch(index){
            case 2:
            case 5:
            case 8:
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
            case 6:
            case 7:
            case 8:
                arr[index] = U;
                arr[index - 3] = 0;
                break;
            default:
                arr[index] = D;
                arr[index + 3] = 0;
                break;
        }
    break;
}
}
return arr;
}

export default shuffle9;