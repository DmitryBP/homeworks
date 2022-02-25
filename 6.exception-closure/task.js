// Задача 1 
// 1. Напишите функцию `parseCount` 
let parseCount = (testItem) => {
  if (isNaN(Number.parseInt(testItem))) 
    throw new Error('Невалидное значение');
    return Number.parseInt(testItem)
}
// 2. Напишите функцию `validateCount`
let validateCount = (testItem2) => {
  try {
    return parseCount(testItem2)
  }
  catch (err) {
    return err
  } 
}
// Задача 2
//1. Напишите класс `Triangle`
class Triangle {
  constructor (a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || b + c < a || a + c < b) 
    throw new Error("Треугольник с такими сторонами не существует")
  }
  getPerimeter() {
    return this.a + this.b + this.c
  }
  getArea() {
    let p = 0.5 * (this.a + this.b + this.c)
    let s = (p * (p - this.a) * (p - this.b) * (p - this.c))**0.5
    return +s.toFixed(3)
  }
}
// 2. Напишите функцию `getTriangle`
let getTriangle = (a,b,c) => {
  try{
    return abc = new Triangle(a,b,c)
  }
  catch (err) {
    return {
      getPerimeter(){
        return "Ошибка! Треугольник не существует"
      },
      getArea(){
        return "Ошибка! Треугольник не существует"
      }
    }
  } 
}