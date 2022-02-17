class PrintEditionItem {
  constructor(name, relaseDate, pagesCount) {
    this.name = name;
    this.relaseDate = relaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  get fix() {
    return this.state *= 1.5;
  }

  set currentState(newState) {
    if (newState < 0) {
      this.state = 0;
    }
    else if (newState > 100) {
      this.state = 100;
    }
    else {
      this.state = newState;
    }
  }

  get readState() {
    return `Книга изношена на - ${this.state}%` 
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, relaseDate, pagesCount) {
    super(name, relaseDate, pagesCount)
    this.type = "magazine"
  }
}

class Book extends PrintEditionItem {
  constructor(autor, name, relaseDate, pagesCount) {
    super(name, relaseDate, pagesCount)
    this.autor = autor
    this.type = 'book'
  }
}

class NovelBook extends Book {
  constructor(autor, name, relaseDate, pagesCount) {
    super(autor, name, relaseDate, pagesCount) 
    this.type = 'novel'
  }
}

class FantasticBook extends Book {
  constructor(autor, name, relaseDate, pagesCount) {
    super(autor, name, relaseDate, pagesCount) 
    this.type = 'fantastic'
  }
}

class DetectiveBook extends Book {
  constructor(autor, name, relaseDate, pagesCount) {
    super(autor, name, relaseDate, pagesCount) 
    this.type = 'detective'
  }
}

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
}

const bq = new Magazine('masha', 1996, 99)

const book1 = new PrintEditionItem('vasia')

const varAndPice = new Book(
  'Лев Николаевич Толстой', 
  'Война и мир',
  1869,
  1256,
  )

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

lenin1.currentState = 20
leninaLib.addBook(lenin1)
leninaLib.addBook(varAndPice)
console.log(leninaLib)