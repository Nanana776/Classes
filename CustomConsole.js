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