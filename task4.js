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
