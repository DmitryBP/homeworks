// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = Infinity;
  max = -Infinity;
  sum = 0; 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i] ;
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    console.log(arr[i])
    sum = sum + arr[i]
    console.log(`summ равно - ${sum}`)
    avr = Number((sum/arr.length).toFixed(2));
  }
  
  return { min: min, max: max, avg: avr };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for (let i = 0; i<arr.length; i++){
      sum += arr[i]
    }
  return sum
}

function makeWork(arrOfArr, func) {
  let max = 0;

  // Ваш кода
  let innerArrSum = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    innerArrSum[i] = func(arrOfArr[i])
    if (innerArrSum[i] > max) {
      max = innerArrSum[i]
    }
  }
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
