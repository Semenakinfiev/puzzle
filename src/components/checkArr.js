

function checkArr(arr) {
    let flag = false;
    if(arr[arr.length-1] === 0) {
        for(let i=0; i<=arr.length-2; i++) {
            if(arr[i] === i+1) {
                flag = true;
            } else {
                flag = false;
                return flag;
            }
        }
    }
    return flag;
}

export default checkArr;