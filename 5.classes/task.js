class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    }
    else if (newState > 100) {
      this._state = 100;    
    }
    else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = "magazine"
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.type = 'book'
    this.author = author
  }
}



class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount) 
    this.type = 'novel'
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount) 
    this.type = 'fantastic'
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount) 
    this.type = 'detective'
  }
}
const varAndPice = new Book(
  'Лев Николаевич Толстой', 
  'Война и мир',
  1869,
  1300
  )
  
  varAndPice.fix()
  varAndPice.state = 135
  // console.log(varAndPice.state)
  // console.log(varAndPice)

// Задача №2. Библиотека

class Library {
  constructor (name, books) {
    books = []
    this.name = name;
    this.books = books;
  }
  addBook(book) {
    if (book.state > 30){
      return this.books.push(book)
    }
    else {
      return console.log(`Книга в плохом состоянии, попробуйте восстановаить книгу`)
    }
  }
  findBookBy(type, value) {
    let book = this.books.find(obj => obj[type] === value)
    // console.log(book)
    if(book){
      return book
    }
    else{
      return null
    }
  }
  giveBookByName(bookName) {
    let book = this.books.findIndex(obj => obj['name'] == bookName)
    if(book == -1) {return null}
    let deletedBook = this.books.splice(book, 1)
    return deletedBook[0]
  }
}

const bq = new Magazine('masha', 1996, 99)

const book1 = new PrintEditionItem('vasia')


const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

const lenin1 = new Book (
  "Ленин",
  "Империализм, как высшая стадия капитализма",
  1917,
  568
)

const leninaLib = new Library("Библиотека имени Ленина")

// console.log(book1)
// console.log(book1.fix)
// book1.currentState = 69
// console.log(book1)
// console.log(book1.readState)
// console.log(bq)
// console.log(varAndPice)
// console.log(picknick)
// console.log(leninaLib)

// lenin1.currentState = 20
// leninaLib.addBook(lenin1)
// leninaLib.addBook(varAndPice)
// console.log(leninaLib)
// // leninaLib.findBookBy('author', "Ленин")
// console.log('Вам выдана книга', '\n', leninaLib.giveBookByName('Война и мир'))
// console.log(leninaLib)

//Задача №3. Журнал успеваемости


class Student {
  constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.classBook = [];
  }
  addMark(mark, subjekt) {
    if (mark < 1 || mark > 5) {
      return console.log ('ОШИБКА! Введите оценку от 1 до 5')
    } else {
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
    
  }
  //Метод для возвращения среднего бала
  getAverageBySubject(subjekt) {
  let indexAverejeBySubject = this.classBook.findIndex(obj => obj.subjekt == subjekt)
  let avearageBySubjekt = (this.classBook[indexAverejeBySubject].marks.reduce((sum, current) => sum + current))/this.classBook[indexAverejeBySubject].marks.length
  return avearageBySubjekt
  }
  getAverage() {
    let averegeMarks = [];
    this.classBook.forEach((obj, index, mas) => {
      let currentSubjekt = this.classBook[index].subjekt
      // console.log(obj, '-->', currentSubjekt)
      averegeMarks.push(this.getAverageBySubject(currentSubjekt))

    })
    return (averegeMarks.reduce((sum, current) => sum + current, 0))/averegeMarks.length;
  }
}
/////////////////////////////////////////////////
const dima = new Student("Dima", "man", 35)
/////////////////////////////////////////////////
// dima.addMark(0, 'algebra')
// dima.addMark(9, 'Geometry')
dima.addMark(4, 'History')
dima.addMark(5, 'art')
dima.addMark(4, 'art')
// dima.addMark(5, 'History')
// dima.getAverage('art')
// console.log(dima.getAverageByAllSubject()) 
/////////////////////////////////////////////////

// console.log(dima)
console.log(dima.classBook) 

// console.log(dima)