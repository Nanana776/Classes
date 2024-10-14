class Shiritori{
    #game_over;
    constructor(){
        this.words=[];
        this.#game_over=false;
    }

    play(word){
       if(this.#game_over){
           return "game over";
       } 
    }
}