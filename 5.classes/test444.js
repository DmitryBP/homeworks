class Student {
  constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age
  }
  setSubject(subjectName) {
    this.subjectName = subjectName
  }
  addMark(mark, subjectName) {
    if(this.marks === undefined){ 
      // добавить первую оценку 
      this.marks = [];
      this.marks.push(mark)
      } else {
        // добавить вторую и последующие оценки в массив
        this.marks.push(mark)
      }
  }
  addMarks(...rest) {
    if(this.marks === undefined){ 
      // добавить первую оценку 
      this.marks = [];
      this.marks = this.marks.concat(rest)
      } else {
        // добавить вторую и последующие оценки в массив
        this.marks = this.marks.concat(rest)
      }
  }
  getAverage() {
    this.avearage = (this.marks.reduce((sum, current) => sum + current))/this.marks.length
  }
  exclude(reason) {
    delete this.subjectName;
    delete this.marks
    this.excluded = reason
  }
}
/////////////////////////////////////////////////
const dima = new Student("Dima", "man", 35)
const tanya = new Student('Tanya', 'girl', 30)
/////////////////////////////////////////////////
dima.setSubject('math')
dima.addMark(5)
dima.addMarks(2,3,4,5)
dima.getAverage()
/////////////////////////////////////////////////
tanya.setSubject('music')
tanya.addMark(5)
tanya.addMarks(3,4,5,5)
tanya.getAverage()
tanya.exclude('Плохое поведение')
/////////////////////////////////////////////////
console.log(dima)
console.log(tanya)