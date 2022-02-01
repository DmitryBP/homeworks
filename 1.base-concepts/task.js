function solveEquation(a, b, c) {
  // let arr;
  // // код для задачи №1 писать здесь
  // return arr; // array
  let D = b**2-4*a*c
  let x0 = -b/(2*a)
  let x1 = (-b + Math.sqrt(D) )/(2*a)
  let x2 = (-b - Math.sqrt(D) )/(2*a)
  let positiveD = [x1, x2];
  let negotiveD = []; 
  let nullD = [x0];

  if (D>0) {
    return positiveD;
  }
  else if(D<0) {
    return negotiveD;
  }
  else {
    return nullD
  }git 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
