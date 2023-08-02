
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
function victory(playerSelection, computerSelection){
    if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return 1
    } else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return 2
    }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return 2
    }else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return 1
    }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return 2
    }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return 1
    }
    return 3;
}

function oneRound(playerSelection){
    computerSelection = getComputerChoice();
    console.log("Computer played: " + computerSelection);
    console.log("You played: " + playerSelection)
    vencedor = victory(playerSelection, computerSelection);
  

    return vencedor;
}
document.addEventListener("DOMContentLoaded", function() {

    function updateResult(text) {
        document.getElementById("result").textContent = text;
    }
    function updateScore(text) {
        document.getElementById("score").textContent = text;
    }

    let playerScore = 0;
    let computerScore = 0;

    function game(playerSelection) {
       
        const result = oneRound(playerSelection);

        if (result == 1) {
            playerScore++;
        } else if (result == 2) {
            computerScore++;
        }
        console.log(playerScore)
        updateScore(`Player: ${playerScore} - Computer: ${computerScore}`);

        if (playerScore === 5) {
            updateResult("Congratulations! You won!");
        } else if (computerScore === 5) {
            updateResult("Sorry, you lost! Better luck next time!");
        } else {
            updateResult(`Computer played: ${computerSelection}. You played: ${playerSelection}`);
        }
    }

    document.getElementById("rock").addEventListener("click", function() {
        game("Rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        game("Paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
        game("Scissors");
    });
});