class CoffeeShop{
    #name;
    #menu;
    #orders;
    constructor(name, menu){
        this.#name=name;
        this.#menu=menu;
        this.orders=[];
    }
   getName(){
    return this.#name;
   }
   setName(){
    this.#name=name;
   }
   addOrder(itemName){
    const item= this.#menu.find(({item})=> item===itemName);
    if (item){
        return "Order added!"
    }
    else{
        return " This item is unavailable!"
    }

   }
}