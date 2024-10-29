class Person{
    constructor(firstName, lastName, gender , age){
        this._firstName=firstName;
        this._lastName=lastName;
        this._age=age;
        this._gender=gender;
    }
    getFirstName(){
        return this._firstName;
    }

    setFirstName(new_name){
        const regExp = /^[A-Z][a-zA-Zà-ÿ]*$/;
        if( typeof new_name==="string" && new_name.length>=2 && regExp.test(new_name)){
             this._name=new_name ;
         } else{ return "Invalid account name parameters";
             }
    }

    getLastName(){
        return this._lastName;
    }

    setLastName(newName){
        const regExp = /^[A-Z][a-zA-Zà-ÿ]*$/;
        if( typeof newName==="string" && newName.length>=2 && regExp.test(newName)){
             this._name=newName ;
         } else{ return "Invalid account name parameters";
             }
    }

    getAge(){
        return this._age;
    }

    setAge(newAge){
        return (typeof newAge==="number")? this._age=newAge :this._age=age; 
    }

    getGender(){
        return this._gender;
    }

    setGender(newGender){
        return (newGender==="female" || newGender==="male")? this._gender=newGender : this._gender=gender;
    }
    
    toString(){
        return `${this._firstName} ${this._lastName}, ${this._age} years old.`;
    }

}

class Student extends Person{
    constructor(name, age, year, fee) {
        super(name, age);
        this._year = year;
        this._fee = fee;
        this.program = [];
    }
    getYear() {
        return this._year;
    }

    getFee() {
        return this._fee;
    }

    getPrograms() {
        return this._program;
    }

    setYear(new_year) {
        return (typeof new_year=="number")? this._year = new_year: this._year=year
    }

    setFee(new_fee) {
        return (typeof new_fee==="number")? this._fee = new_fee: this._fee=fee;
    }

    setProgram(programName, grade) {
        this.program.push({ programName, grade });
    }

    passExam(programName, grade) {
        const program = this.program.find(prog => prog.programName === programName);
        if (prog) {
            prog.grade = grade; 
        } else {
            this.addProgram(programName, grade); 
        }

        if (this.isAllPassed()) {
            this.year += 1; 
        }
    }

    isAllPassed() {
        return this.program.every(prog => prog.grade !== undefined && prog.grade >= 50);
    }

    toString() {
        const programs = this.program.map(({ programName, grade }) => `${programName}: ${grade !== undefined ? grade : 'N/A'}`).join(', ');
        return `Student: ${this.getName()}, Year: ${this.year}, Fee: ${this.fee}, Programs: [${programs}]`;
    }
}
