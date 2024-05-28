console.log("Hello World!")
const computerTurnDisplay = document.getElementById("computer-turn");
const userTurnDisplay = document.getElementById("user-turn");
const resultDisplay = document.getElementById("result");
const userTurnButtons = Document.querySelectorAll("button");


let computerTurn;
let userTurn;

console.log(userTurnButtons);

userTurnButtons.forEach(function (button) {
    console.log("Button", button);
    button.addEVentlistener('click', function (e) {
        console.log("Button ID: ",e.target.id);
        userTurn = e.target.id;
        userTurnDisplay.innerHTML = userTurn;
        generateComputerTurn();
        compareTurns();
    })
})

function generateComputerTurn() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log("Random Number", randomNumber);

    if(randomNumber === 1) {
        computerTurn = "stein"

    } else if(randomNumber === 2) {
        computerTurn = "schere"
    } else {
        computerTurn = "papier"
    }

    computerTurnDisplay.innerHTML = computerTurn;
}






function compareTurns(){
    if(userTurn === computerTurn){
       result = "Unentschieden!";
    }
    if(userTurn === "stein" && computerTurn === "papier"){
       result = "Computer gewinnt!";
    }
    if(userTurn === "stein" && computerTurn === "schere"){
       result = "Du hast gewonnen!";
    }
    if(userTurn === "schere" && computerTurn === "papier"){
       result = "Du hast gewonnen";
    }
    if(userTurn === "schere" && computerTurn === "stein"){
    result = "Computer gewinnt!";
    }
    if(userTurn === "papier" && computerTurn === "stein"){
    result = "Du hast gewonnen!";
    }
    if(userTurn === "papier" && computerTurn === "schere"){
