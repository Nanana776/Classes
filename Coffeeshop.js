class CoffeeShop{
    #name;
    #menu;
    #orders;
    constructor(name, menu){
        this.#name=name;
        this.#menu=menu;
        this.#orders=[];
    }
   getName(){
    return this.#name;
   }
   setName(){
    this.#name=name;
   }
}