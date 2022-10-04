// Задание 1
function getArrayParams(arr) {
  let min = Infinity, 
  max = -Infinity, 
  sum = 0,
  avg;

for ( i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  };
  if (arr[i] < min) {
    min = arr[i];
  };
  sum += arr[i];
}
avg = parseFloat((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}



// Задание 2

let arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];

function worker(arrOfArr) {  
  let sum = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
      sum += arrOfArr[i];
    }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  for ( let i = 0; i < arrOfArr.length; i++) {
      let sum = func(arrOfArr[i]);
      if (sum > max) {
        max  = sum
      }
    }
  
    return max;
  }



// Задание 3
function worker2(arrOfArr) {
  let min = Infinity, 
  max = -Infinity;
  // let diff;

for ( i = 0; i < arrOfArr.length; i++) {
  if (arrOfArr[i] > max) {
    max = arrOfArr[i];
  };
  if (arrOfArr[i] < min) {
    min = arrOfArr[i];
  };
}

return Math.abs(max - min);
}
console.log (worker2([0,1,2]));