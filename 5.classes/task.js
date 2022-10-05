class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;

    };

    
fix() {
   return this.state *=  3 / 2;
    };

set state (grm) {
    if (grm  < 0) {
        this._state = 0;
    } 
    else if ( grm > 100) {
        this._state = 100;
    } else {
        this._state = grm;
    }
}

get state () {
    return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state, type);
        this.type = "magazine";
    }
} 

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (name, releaseDate, pagesCount, state, type);
        this.type = "book";
        this.author = author;
    }
} 

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state, type) {
        super (author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}


const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008,
    90
  );
  
  console.log(sherlock.releaseDate); //2019
  console.log(sherlock.state); //100
  sherlock.fix();
  console.log(sherlock.state); //100


  const sherlock1 = new DetectiveBook(
    "dfjgbfdg",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008,
    90,
  );

  console.log(sherlock1.releaseDate); //2019
  console.log(sherlock1.state); //100
  sherlock.fix();
  console.log(sherlock1.state);
  console.log(sherlock1.author);
  console.log(sherlock1.type);

  const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15




//   2 Задание




class Library {
    constructor (name, books) {
        this.name = name;
        this.books = [];
    }

addBook(book) {
    if (book.state > 30) {
        this.books.push (book);
    }
    return;
    }

findBookBy(type, value) {
    let bookResult = this.books.find(book => book[type] === value);
    return bookResult;
    }

findBookBy(type, value) {
     let searchResult = this.books.find(book => book[type] === value);

    if (searchResult === undefined) {
        searchResult = null;
        return searchResult;
    } else {
        return searchResult;
    }
    }

giveBookByName(bookName) {
    let issuedBook = this.books.find(item => item.name === bookName);
        console.log(issuedBook);
        if (issuedBook === undefined) {
            return issuedBook = null;
        } else {
            this.books.splice(this.books.indexOf(issuedBook), 1);
            return issuedBook;
            
        } 
    }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
