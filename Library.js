class Author {

    constructor(name, email, gender) {
        this._name=name;
         this._email=email;
         this._gender=gender.toLowerCase();
    }
    get name(){
        return this._name;
    }
    
    set name(name) {
        if (typeof name == 'string') {
            this._name = name;
        } else {
            throw new Error("Invalid name");
        }
    }
    get email(){
        return this._email;}
    

    set email(email) {
        const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regExp.test(email)) {
            this._email = email;
        } else {
            throw new Error("Invalid email");
        }
    }
    
    get gender(){
        return this._gender;
    }
    
    set gender(gender) {
        if (gender === "female" || gender === "male") {
            this._gender = gender;
        } else {
            this._gender="unknown";
        }
    }

    toString() {
        const address_title= this._gender === "female" ? "Ms." : this._gender === "male" ? "Mr." : "Mr./Ms.";
        return `${address_title} ${this._name}`;
    }
}

class Book{
    constructor(title, author, price, quantity){
      this._title=title;
      this._author= author.name;
      this._price=price;
      this._quantity=quantity;
    }
   
    get title(){

      return this._title;
    }

    set title(title){
       return this._title=title;
    }

    get author(){
        return author.name;
    }

    set author(new_name){
            return (typeof new_name==="string")? this._author=new_name: this.author=author.name;
        }
    get price(){
        return this._price;
    }
    set price(new_price){
        return (typeof new_price==="number")? this._price=new_price : this._price=price;
    }

    get quantity(){
        return this._quantity;
    }
    set quantity(new_amount){
        return (typeof new_amount==="number")? this._quantity=new_amount : this._quantity=this.quantity;
    }
    getProfit(){
         return this._quantity * this._price;
    }
    toString(){
        return `Title: ${this._title}, Author: ${this._author}, Price: $${this._price}, Quantity: ${this._quantity}`;
    }
    }

let author = new Author("J. K. Rowling", "abc@gmail.com", "fEmale");
console.log(author.gender); // female
console.log(author.name); // J. K. Rowling
console.log(author.toString()); // Ms. J. K. Rowling
author.name = 12;