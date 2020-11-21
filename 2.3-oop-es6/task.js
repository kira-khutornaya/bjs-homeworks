"use strict";

//Задание 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "fantastic";
    }
}


class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}


//Задание 2

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            for (let key in book) {
                if (key === type && book[key] === value) {
                    return book;	
                }
            }
	    }
        
        return null;
    }

    giveBookByName(bookName) {
        this.bookName = bookName;
        for (let book of this.books) {
            if (book.name === bookName) {
                this.books.splice(this.books.indexOf(book),1);
                return book;
            }
        }

        return null;
    }
}


//Задание 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade > 0 && grade <= 5) {
            if (Array.isArray(this.subjects[subject])) {
                this.subjects[subject].push(grade);
            } else {
                this.subjects[subject] = [];
                this.subjects[subject].push(grade);
            } 
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${[subject]}". Допускаются только числа от 1 до 5.`);
        }

        return this.subjects[subject] ? this.subjects[subject].length : 0;
    }

    getAverageBySubject(subject) {
        if (!this.subjects[subject]) {
            return 0;
        }

        let sum = 0;
        for(let mark of this.subjects[subject]) {
            sum += mark;
        }

        const average = sum / this.subjects[subject].length;

        return parseFloat(average.toFixed(1));
    }

    getTotalAverage() {
        if (!this.subjects) {
            return 0;
        }

        let sum = 0;
        let subjectNumber = 0;
        for (let subject in this.subjects) {
            sum += this.getAverageBySubject(subject);
            subjectNumber++;
        }

        return parseFloat((sum / subjectNumber).toFixed(1));
    }
}


// тестирование кода
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new NovelBook("М. Горький", "Яшка", 1919, 4));
console.log(library);

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1919).name); //"Яшка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 5
library.giveBookByName("Пикник на обочине");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 4

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168, 10);
picknick.fix();
library.addBook(picknick);
console.log(library);

const log = new StudentLog('Олег Никифоров');
console.log(log.getName())
console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry')); 
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.7
console.log(log.getAverageBySubject('algebra')); // 3.3
console.log(log.getAverageBySubject('math')); // 0

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3.9






























/*class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state * 1.5;
	}

	set noName(num) {
		if (num < 0) {
			a = this.state = 0;
		} else if (num > 100) {
			a = this.state = 100;
		} else {
			a = this.state = num;
		}

		this._noName = a;
	}

	get noName() {
		return this._noName;
	}
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //10

class Magazine extends PrintEditionItem {

}*/