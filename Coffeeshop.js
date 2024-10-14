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
        this.#orders.push(item)
        return "Order added!"
    }
    else{
        return " This item is unavailable!"
    }
   }
   fulfillOrder(){
    if(this.#orders>0) {
    const done_order=this.#orders.shift();
    return `The ${done_order} is ready!`
   }
   else {
    return "All orders have been fulfilled!"
   }
 }
 listOrders(){
    return this.#orders;
 }
  dueAmount(){
    return this.#orders.reduce((total, order) => {
        const {price}=this.#menu.find(({item}) => item===order);
        return total+price;
  },0);
}
       }
  