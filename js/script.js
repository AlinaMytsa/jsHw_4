'use strict';

const get = prompt('What would you like to do? For example: add/sub/mult/div.');
const data1 = +prompt('enter data 1');
const data2 = +prompt('enter data 2');



  if (get === 'add'){
    alert(data1 + data2);
    console.log(data1 + data2);
  } else if (get === 'sub'){
    alert(data1 - data2);
    console.log(data1 - data2);
  } else if (get === 'mult'){
    alert(data1 * data2);
    console.log(data1 * data2)
  } else if (get === 'div'){
    alert(data1 / data2);
    console.log(data1 / data2);
  }




