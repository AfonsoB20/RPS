class js {
    getComputerChoice(){
    let x = Math.random()*2;
    if(x == 0 ){
        return "Rock";
    } else if(x == 1){
        return "Paper";
    } else if(x == 2){
        return "Scissors";
    }

    return " ";
    }
    getComputerChoice();
    
}