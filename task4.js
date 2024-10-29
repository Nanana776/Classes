class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }

    getTitle() {
        return this._title;
    }
    setTitle(new_title){
        return (typeof new_title==="string") ? this._title=new_title: this._title=title;
    }

    getAuthor() {
        return this._author;

    }

    setAuthor(new_author){
        return(typeof new_author==="string")? this._author=new_author : this._author=author;
    }

    toString() {
        return `${this._title} by ${this._author}`;
    }

    isTheSameBook(book) {
        return this._title === book.getTitle() && this._author === book.getAuthor();
    }
}

class LibraryBookBase extends Book {
    constructor(title, author, bookId) {
        super(title, author);
        this._bookId = bookId;
    }

    getBookId() {
        return this._bookId;
    }

    toString() {
        return `${super.toString()}, ID: ${this._bookId}`;
    }
}

class LibraryBook extends LibraryBookBase {
    constructor(title, author, bookId, quantity) {
        super(title, author, bookId);
        this._quantity = quantity;
    }

    getQuantity() {
        return this._quantity;
    }

    setQuantity(value) {
      return (typeof value==="number") ? this._quantity = value: this._quantity=quantity;
    }

    increaseQuantityBy(amount) {
        this._quantity += amount;
    }

    decreaseQuantityBy(amount) {
        if (this._quantity >= amount) {
            this._quantity -= amount;
        } else {
            console.error("Insufficient quantity to decrease.");
        }
    }

    toString() {
        return `${super.toString()}, Quantity: ${this._quantity}`;
    }
}

class ReaderBook extends LibraryBookBase {
    constructor(title, author, bookId, expirationDate) {
        super(title, author, bookId);
        this.expirationDate = expirationDate;
        this.isReturned = false;
    }

    getExpirationDate() {
        return this.expirationDate;
    }

    isReturned() {
        return this.isReturned;
    }

    setExpirationDate(expirationDate) {
        this.expirationDate = expirationDate;
    }

    returnBook() {
        this.isReturned = true;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}, Returned: ${this.isReturned}`;
    }
}

class Reader {
    constructor(firstName, lastName, readerId) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._readerId = readerId;
        this.books = [];
    }

    getFirstName() {
        return this._firstName;
    }

    getLastName() {
        return this._lastName;
    }

    getReaderId() {
        return this._readerId;
    }

    getBooks() {
        return this.books;
    }

    setFirstName(firstName) {
        this._firstName = firstName;
    }

    setLastName(lastName) {
        this._lastName = lastName;
    }

    toString() {
        return `${this._firstName} ${this._lastName}, ID: ${this._readerId}`;
    }

    borrowBook(book, library) {
        const borrowedBook = library.lendBook(book, this._readerId);
        if (borrowedBook) {
            this.books.push(borrowedBook);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
        this.readers = [];
    }

    getBooks() {
        return this.books;
    }

    getReaders() {
        return this.readers;
    }

    doHaveBook(requestedBook) {
        return this.books.some(book => book.isTheSameBook(requestedBook) && book.getQuantity() > 0);
    }

    addBook(newBook) {
        const existingBook = this.books.find(book => book.isTheSameBook(newBook));
        if (existingBook) {
            existingBook.increaseQuantityBy(1);
        } else {
            this.books.push(new LibraryBook(newBook.getTitle(), newBook.getAuthor(), newBook.bookId, 1));
        }
    }
}

