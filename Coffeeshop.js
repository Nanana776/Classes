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

   addOrder(itemName){
    const item= this.#menu.find(({item})=> item===itemName);
    if (item){
        this.#orders.push(item)
        return "Order added!"
    }
    else{
        return " This item is unavailable!"
    }
   }
   fulfillOrder(){
    if(this.#orders.length > 0) {
    const done_order=this.#orders.shift();
    return `The ${done_order.item} is ready!`
   }
   else {
    return "All orders have been fulfilled!"
   }
 }
}