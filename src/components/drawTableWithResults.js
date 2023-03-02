

function drawTableWithResults(resultsTable) {
    let str = localStorage.getItem('arrResults');
    let arrResults = JSON.parse(str);

      if(arrResults) {
        arrResults.sort(function compareNumeric(a, b) {
          let arr1, arr2;
          arr1 = a[1];
          arr2 = b[1];
          if (arr1 > arr2) return 1;
          if (arr1 == arr2) return 0;
          if (arr1 < arr2) return -1;
        });
      }

    


    for(let elem of document.querySelectorAll('tr')) {
       for(let elem1 of document.querySelectorAll('td')) {
        elem1.remove();
       }
        elem.remove();
    }

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


    if(arrResults) {
      for(let elem of arrResults) {
        let tr1 = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        td1.innerHTML = elem[0];
        td2.innerHTML = elem[1];
        td3.innerHTML = elem[2];
        resultsTable.appendChild(tr1);
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
      }
    }
}

export default drawTableWithResults;