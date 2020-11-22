"use strict";

function Book(title, genre, pages, isbn) {
    this.title = title;
    this.genre = genre;
    this.pages = pages;
    this.isbn = isbn;

    this.getBookInfo = function() {
        return console.log("Book: " + this.title + "\n Genre: " + this.genre + "\n Amount pages: " + this.pages + "\n ISBN number: " + this.isbn + "\n -----");
    };
}

let books = [];

books.push(new Book("Harry Potter and the Philosopher's Stone", "Fantasy", 226, "0-7475-3269-9"));
books.push(new Book("Harry Potter and the Chamber of Secrets", "Fantasy", 251, "0-7475-3849-2"));
books.push(new Book("Harry Potter and the Prisoner of Azkaban", "Fantasy", 317, "0-7475-4215-5"));


let additionalBooks = prompt("How many books do you want to add?", "1,2,4,6,8,10..");
for (let i = 1; i <= additionalBooks; i++) {

    let addBook = prompt("title: ");
    let addGenre = prompt("Genre: ");
    let addPages = prompt("Amount pages: ");
    let addIsbn = prompt("ISBN Nummer: ");
    books.push(new Book(addBook, addGenre, addPages, addIsbn));
}

books.forEach(function(e) {
    e.getBookInfo();
});