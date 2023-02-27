
function getComputerChoice(){
    let x = Math.floor(Math.random()*3);
    if(x == 0 ){
        return "Rock";
    } else if(x == 1){
        return "Paper";
    } else if(x == 2){
        return "Scissors";
    }
    
    return " ";
    
    
}

function oneRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock Paper Scissors");
   // console.log(computerSelection)
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You Won!"
    } else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return "You Lost"
    }
    return "Draw";
}

function game(){
    for(let i=0; i<5; i++){
        console.log(oneRound());
    }

}
