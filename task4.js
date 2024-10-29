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
