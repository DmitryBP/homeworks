class Student {
  constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.classBook = [];
  }
  addMark(mark, subjekt) {
    let subjektIndex = this.classBook.findIndex(obj => obj.subjekt === subjekt)
    if(subjektIndex == -1) {
      this.classBook.push({
        subjekt: subjekt,
        marks: [mark]
      });
    } else {
      this.classBook[subjektIndex].marks.push(mark) // добавляем оценку к предмету
    }
  }
  //Метод для возвращения среднего бала
  getAverage(subjekt) {
  let indexAverejeBySubject = this.classBook.findIndex(obj => obj.subjekt == subjekt)
  let avearageBySubjekt = (this.classBook[indexAverejeBySubject].marks.reduce((sum, current) => sum + current))/this.classBook[indexAverejeBySubject].marks.length
  return console.log(avearageBySubjekt)
  }
  getAverageByAllSubject() {
    let averegeMarks = [];
    
    this.classBook.forEach((obj, index) => {
      let currentSubjekt = this.classBook[index].subjekt
      // console.log(obj, '-->', currentSubjekt)
      this.getAverage('art')

    })
    return averegeMarks 
  }
}
/////////////////////////////////////////////////
const dima = new Student("Dima", "man", 35)
/////////////////////////////////////////////////
dima.addMark(3, 'algebra')
dima.addMark(4, 'Geometry')
dima.addMark(4, 'History')
dima.addMark(5, 'art')
dima.addMark(9, 'art')
dima.addMark(5, 'History')
dima.getAverage('art')
console.log(dima.getAverageByAllSubject()) 
/////////////////////////////////////////////////

// console.log(dima)
// console.log(dima.classBook) 

// console.log(dima)