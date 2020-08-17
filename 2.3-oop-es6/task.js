class PrintEditionItem {
      constructor(name, releaseDate, pagesCount, state, type) {
       this.name = name;
       this.releaseDate = releaseDate;
       this.pagesCount = pagesCount;
       this.state = 100;
       this.type = null;
    } 
      
   get state() {
    return this._state;
  }

  set state(num) {
    if (num >= 100) {
    this._state = 100;
    } else if ( num <= 0) {
    this._state = 0;  
    } else {
     this._state = num; 
    }
  }

  fix(){
    
       if ((this._state = this._state * 1.5) <= 100) {
         return this._state
       } else {
         return this._state = 100;
       }
  }     
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
  super(name, releaseDate, pagesCount, state, type)
  this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
  super(name, releaseDate, pagesCount, state, type)
  this.author = author;
  this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type)
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type)
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type)
    this.type = 'detective';
  }
}

//const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

//console.log(sherlock.releaseDate); //2019
//console.log(sherlock.state); //100
//sherlock.fix();
//console.log(sherlock.state); //100

//const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

//console.log(picknick.name);
//console.log(picknick.author); //"Аркадий и Борис Стругацкие"
//picknick.state = 10;
//console.log(picknick.state); //10
//picknick.fix();
//console.log(picknick.state); //15


class Library {
  constructor (name, books){
    this.name = name;
    this.books =  [];
  }
   addBook(book) {
     this.books.push(book);
   } 

  findBookBy(type, value) {  

let book = this.books.find(item => item[type] == value);
     if (book === undefined) { 
       return null
     } else {
     return book
     }
}

giveBookByName(bookName){
   let book = this.books.findIndex(item => item.name == bookName);
     if (book === -1) { 
        console.log(book)
       return null
     } else { 
       let bookD = ((this.books.splice(book, 1)));
       return bookD.pop();
     }
 } 
}

//const library = new Library("Библиотека имени Ленина");

//library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
//library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
//library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
//library.addBook(new Magazine("Мурзилка", 1924, 60));

//console.log(library.books)
//console.log(library.findBookBy("name", "Властелин колец")); //null
//console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

//console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
//library.giveBookByName("Машина времени");
//console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
//console.log(library.books)

class StudentLog {
  constructor (name, grades) {
  this.name = name;
  this.grades = [];
  }
  getName() {
    return this.name;
  }
  
  getGrades() {
    return this.grades;
  }
 
  addGrade(grade, subject){
    if ( grade > 0 && grade <= 5) {
    this.grades.push({grade,subject});
    let gradesSub = this.grades.filter(item => item.subject == subject )
    console.log(gradesSub.length);
    //console.log(this.grades);
    } else {
      console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
      return 0;
    }
    }

  getAverageBySubject(subject){
  let find; 
  if ( find = this.grades.find(item => item.subject == subject) === undefined) {
  return 0 
} else {
//console.log(find);
    let gradesSub = this.grades.filter(item => item.subject == subject );
     //console.log(subject);
     //console.log(gradesSub);
    
    function getAverageGrade(avGrades){
       return avGrades.reduce((item, key) => item + key.grade, 0) / avGrades.length;
    }
     return getAverageGrade(gradesSub)
}
  }
  getTotalAverage(){
     return this.grades.reduce((item, key) => item + key.grade, 0) / this.grades.length;
  }

  }
