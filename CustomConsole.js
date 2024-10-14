class CustomConsole{
    constructor(){
        this.logs=[];
    }
  log(values){
    const log_text=values.join(' ');
    this.log.push(log_text);
    return log_text;
  }
}