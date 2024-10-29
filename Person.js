class Person{
    constructor(firstName, lastName, gender , age){
        this._firstName=firstName;
        this._lastName=lastName;
        this._age=age;
        this._gender=gender;
    }
    get firstName(){
        return this._firstName;
    }

    set firstName(new_name){
        const regExp = /^[A-Z][a-zA-Zà-ÿ]*$/;
        if( typeof new_name==="string" && new_name.length>=2 && regExp.test(new_name)){
             this._name=new_name ;
         } else{ return "Invalid account name parameters";
             }
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(newName){
        const regExp = /^[A-Z][a-zA-Zà-ÿ]*$/;
        if( typeof newName==="string" && newName.length>=2 && regExp.test(newName)){
             this._name=newName ;
         } else{ return "Invalid account name parameters";
             }
    }

    get age(){
        return this._age;
    }

    set age(newAge){
        return (typeof newAge==="number")? this._age=newAge :this._age=age; 
    }

    get gender(){
        return this._gender;
    }

    set gender(newGender){
        return (newGender==="female" || newGender==="male")? this._gender=newGender : this._gender=gender;
    }
}