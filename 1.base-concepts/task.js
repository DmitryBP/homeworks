
"use strict";

function solveEquation(a, b, c) {
  // // код для задачи №1 писать здесь
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
  // код для задачи №2 писать здесь
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let date2 = new Date(date)
  let date1 = new Date()
  let n = Math.round((date2 - date1)*12/(365*24*3600*1000)) // - количество месяцев
  let S = amount - contribution // - тело кредита
  let P = (percent/100)/12
  let monthPay = S * (P + (P / ( Math.pow((1 + P), n) - 1)))
  console.log(`Срок кредита - ${n} месяцев`)
  console.log(`Ежемесячный платеж составит - ${monthPay.toFixed(2)} руб.`)
  totalAmount = monthPay * n
  return `Общая сумма которую придется запалатить составит - ${totalAmount.toFixed(2)} руб.`

}

console.log(calculateTotalMortgage(10, 1000, 50000, '2023.02.01.'))
