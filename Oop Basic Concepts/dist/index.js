"use strict";
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
    getAuthor() {
        return this.author;
    }
}
class FictionBook extends Book {
    constructor(title, author, year, genre) {
        super(title, author, year);
        this.genre = genre;
    }
    getFictionDetails() {
        return `${this.getDetails()}, Genre: ${this.genre}`;
    }
}
const book = new FictionBook("1984", "George Orwell", 1949, "Dystopian");
console.log(book.getFictionDetails());
//# sourceMappingURL=index.js.map