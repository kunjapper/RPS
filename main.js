function getComputerChoice (){
    min = 0;
    max = 3;
    choice = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    choice = Math.floor(Math.random()*(max-min)+min);

    if (choice === 1){
        return "Rock"
    }
    else if (choice == 2){
        return "Scissors"
    }
    else{
        return "Paper"
    }
}