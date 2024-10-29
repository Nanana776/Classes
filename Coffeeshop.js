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

 listOrders(){
    return this.#orders.map(order=>order.item);
 }
  dueAmount(){
    return this.#orders.reduce((total, order) => {
        const {price} = order;
        return total+price;
  },0);
 }
  cheapestItem(){
    const cheapest= this.#menu.reduce((minItem, currItem)=>{
        return (currItem.price < minItem.price)? currItem : minItem},this.#menu[0]);
        return cheapest.item;
    }
    drinksOnly(){
        return this.#menu.filter(({type})=>type==="drinks").map(({item})=>item);
    }
    foodOnly(){
        return this.#menu.filter(({type})=>type==="food").map(({item})=>item);
    }
  }
