class Account{

    constructor( id, name, balance){
        this._id=id;
        this._name=name;
        this._balance=balance;
    }
     
    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    set name(new_name){
        const regExp = /^[A-Z][a-zA-Zà-ÿ]*(?:[-'\s][A-Z][a-zA-Zà-ÿ]*)*$/;
        if( typeof new_name==="string" && new_name.length>=2 && regExp.test(new_name)){
             this._name=new_name ;
         } else{ throw new Error ("Invalid name parameters");
             }
    }

 }
