class CustomConsole{
    constructor(){
        this.logs=[];
    }
  log(values){
    const log_text=values.join(' ');
    this.logs.push(log_text);
    return log_text;
  }
  history(start=0, end=this.logs.length){
    return this.logs.reduce((result, log, idx)=>{
      if(idx>=start && idx<end){
        result.push(log);
      }
    },[])
  }
  clearHistory(){
    this.logs=[];
  }
}
const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');
myConsole.log([0, 1, 2, 3]), // "Regular: [0,1,2,3]"
fancyConsole.log({ a:1, b:2 }), // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3) ,//➞ "ok : 1, 2, 3"
myConsole.clearHistory(), // true
myConsole.history()