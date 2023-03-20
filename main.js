function getComputerChoice (){
    min = 0;
    max = 3;
    choice = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    choice = Math.floor(Math.random()*(max-min)+min);
    let computerChoice = "default"
    if (choice === 1){
        return computerChoice = "rock"
    }
    else if (choice == 2){
        return computerChoice = "scissors"
    }
    else{
        return computerChoice = "paper"
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Let's play a Rock, Paper, Scissors. Pick your item!");
    //make sure its valid answer
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || "paper" || "scissors"){
        //save it to a variable
        return playerChoice;
    }
    else{
        // ask again for player choice
        console.log("Your response " + playerChoice + " did not contain a valid item. Please choose 'rock', 'paper', or 'scissors'.");
        return;
    } 
}

function playRound(computerChoice,playerChoice) {
    /*
        compare computer to user choice
        tell user the result 
    */

    let gameResult = "No Contest";

    if(computerChoice == null || playerChoice == null){
        gameResult = "No Contest because null";
        return gameResult;
   }
   else if(computerChoice == playerChoice){
        gameResult = "No Contest. Player and the computer both selected " + playerChoice;
        return gameResult;
   }
   else if (computerChoice == "rock" && playerChoice == "scissors"){
        gameResult = "Computer Wins. Rock beats scissors.";
        return gameResult;
   }
   else if (computerChoice == "scissors" && playerChoice == "paper"){
        gameResult = "Computer Wins. Scissors beats paper.";
        return gameResult;    
        }
    else if (computerChoice == "paper" && playerChoice == "rock"){
        gameResult = "Computer Wins. Paper beats rock.";
        return gameResult;    
        }
    else if (computerChoice == "rock" && playerChoice == "paper"){
        gameResult = "Player Wins. Paper beats rock.";
        return gameResult;
        }
   else if (computerChoice == "paper" && playerChoice == "scissors"){
        gameResult = "Player Wins. Scissors beats paper.";
        return gameResult;
        }
    else if (computerChoice == "scissors" && playerChoice == "rock"){
        gameResult = "Player Wins. Rock beats scissors.";
        return gameResult;
        }
    else{
        gameResult = "code error"
        return gameResult;
        }

}

function game(){
    let gamecounter = 0;
    let playerScore = 0;
    let computerScore = 0;

    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    return playRound(playerChoice, computerChoice);
    
    /*
    play the first game and score update

    report the winner
    */
}