class CustomConsole{
  #type;
  #logs;
    constructor(type=''){
        this.#logs=[];
        this.#type=type;
    }

  log(...args){
    let log_text;
    
    if (args.length === 1) {
      const value = args[0];
      if (Array.isArray(value)) {
        log_text = `${this.#type}: [${value.join(', ')}]`;
         } 
       else if (typeof value === 'object' && value !== null) {
        log_text = `${this.#type}: {${Object.entries(value).map(([key, val]) => `${key}:${val}`) .join(', ')}}`;
         } 
         else {
           log_text = `${this.#type}: ${value}`;
             }
      
      this.#logs.push(log_text);
      return log_text;
    }
    else {
      log_text = `${args[0]} ${args.slice(1).join(', ')}`;
      this.#logs.push(log_text);
      return log_text;
    }
  }
  history(){
    return this.#logs.join('\n') || ""; 
  }
  
  clearHistory(){
    this.#logs=[];
  }
}
const myConsole = new CustomConsole('Regular');
const fancyConsole = new CustomConsole('Fancy');
myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]"
fancyConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3) //➞ "ok : 1, 2, 3"
myConsole.clearHistory() // true
myConsole.history()// ""