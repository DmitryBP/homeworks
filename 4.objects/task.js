function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
}
 
Student.prototype.setSubject = function (subjectName) {
//  ваш код
  this.subjectName = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function(mark) {

  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks = [];
    this.marks.push(mark)
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(mark)
    }
}

//Метод для добавления нескольких оценок
Student.prototype.addMarks = function(...rest) {
  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks = [];
    this.marks = this.marks.concat(rest)
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks = this.marks.concat(rest)
    }
}

//Метод для возвращения среднего бала
Student.prototype.getAverage = function() {
  this.avearage = (this.marks.reduce((sum, current) => sum + current))/this.marks.length
}

//Метод для исключения студентов
Student.prototype.exclude = function(reason) {
  delete this.subjectName;
  delete this.marks
  this.excluded = reason
}

//Объявлеяем новых студентов 
const dima = new Student('dima', 'boy', 35);
const tany = new Student('tany', 'girl', 30);

tany.setSubject('Math')
dima.setSubject('chemistery')
dima.addMark(5)
dima.addMark(3)
dima.addMark(3)
dima.addMark(4)
dima.addMarks(7,7,7)
dima.getAverage()
// dima.exclude('Слишком умный')
console.log(dima)