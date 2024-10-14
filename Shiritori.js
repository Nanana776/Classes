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
     if (this.words.length===0){
             this.words.push(word);
                 return this.words;
                     }
     const last_word = this.words[this.words.length - 1];

     if (last_word[last_word.length-1] !== word[0] || this.words.includes(word)) {
          this.#game_over=true; 
              return "game over";
                  }
  
      this.words.push(word);
         return this.words;
             }

     restart() {
       this.words=[];
       this.#game_over=false;
         return "game restarted";
             }

    }

    const myShiritori = new Shiritori();

     myShiritori.play("apple"); // ["apple"]
     myShiritori.play("ear"); // ["apple", "ear"]
     myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
     myShiritori.play("corn"); // "game over// Corn does not start with an "o".
     myShiritori.words; // ["apple", "ear", "rhino"]// Words should be accessible.
     myShiritori.restart(); // "game restarted"
     myShiritori.words; // [] // Words array should be set back to empty.
     myShiritori.play("hostess"); // ["hostess"]
     myShiritori.play("stash"); // ["hostess", "stash"]
     myShiritori.play("hostess"); // "game over"
