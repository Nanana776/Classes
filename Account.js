class Account{
#id;
    constructor( name, balance){
        
        this._name=name;
        this._balance=balance;
    }
     
    get id(){
        return this.#id;
    }

    get name(){
        return this._name;
    }

    set name(new_name){
        const regExp = /^[A-Z][a-zA-Zà-ÿ]*(?:[-'\s][A-Z][a-zA-Zà-ÿ]*)*$/;
        if( typeof new_name==="string" && new_name.length>=2 && regExp.test(new_name)){
             this._name=new_name ;
         } else{ throw new Error ("Invalid account name parameters");
             }
    }
    get balance(){
        return this._balance;
    }

    set balance(new_balance){
        if(!isNaN(new_balance) && isFinite(new_balance) && new_balance>=0){
            this._balance=new_balance;
        } else{
            this._balance=balance;
        }
 }

    credit(amount){
      return  this._balance = !isNaN(amount) ? this._balance + amount : this._balance;
    }

    debit(amount){
        return (!isNaN(amount) && amount<this._balance)? this._balance-=amount : "Amount exceeded balance";
    }

    transferTo(anotherAccount, amount){
        if (!isNaN(amount) && amount<this._balance){
            this._balance-=amount;
            anotherAccount+=amount;
            return this._balance;
    }
    else{
        return  "Amount exceeded balance";
    }
 }
    static identifyAccounts(accountFirst, accountSecond) {
            if (!(accountFirst instanceof Account) || !(accountSecond instanceof Account)) {
                return false;
                     }
           
            return accountFirst.name === accountSecond.name &&
                   accountFirst.balance === accountSecond.balance &&
                   accountFirst.accountNumber === accountSecond.accountNumber;
        }

        toString(){
            return `${this._name}'s accounnt balance is ${this._balance}`}
}
        
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is 1400