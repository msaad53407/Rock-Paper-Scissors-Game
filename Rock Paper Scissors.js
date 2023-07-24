
let userScore = 0
let compScore = 0
let userName = prompt("Enter your Name: ")

//  Function Containing Main Game Code
const PlayGame = () => {
    const options = ["R", "P", "S"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomLetter = options[randomIndex];

    // const userName = prompt("Enter your Name: ")
    const userInput = prompt("Enter your move R or P or S\nALERT!\nOnly Capital Letters are Allowed: ");

    //  Code for Rock
    if (randomLetter == userInput) {
        alert(`Tied\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`)
    } else if (randomLetter == "R" && userInput == "P") {
        userScore += 1
        alert(`${userName} Wins!\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`)
    } else if (randomLetter == "R" && userInput == "S") {
        compScore += 1
        alert(`Computer Wins!\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`)
    }

    //  Code for Paper
      else if (randomLetter == "P" && userInput == "S") {
        userScore += 1
        alert(`${userName} Wins!\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`)
    } else if (randomLetter == "P" && userInput == "R") {
        compScore += 1
        alert(`Computer Wins!\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`)
    }

    //  Code for Scissors
     else if (randomLetter == "S" && userInput == "R") {
        userScore += 1
        alert(`${userName} Wins!\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`)
    } else if (randomLetter == "S" && userInput == "P") {
        compScore += 1
        alert(`Computer Wins!\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`)
    }
}
// Function to Simulate Rounds Logic
const Rounds = () => {
    let round = 1;
    while (round != 6) {
        alert(`Round no ${round}`)
        PlayGame();
        round++
    }
}
const result = ()=> {
    if(userScore == compScore){
        alert(`Game Tied`)
    } else if(userScore>compScore){
        alert(`${userName} WINS!`)
    } else if(userScore<compScore){
        alert(`Computer WINS!`)
    }
}
Rounds();
result();
//      Option to Play more
let userChoice = confirm("Do you Want to Play Game Again? ")
while (userChoice) {
    userName = prompt("Enter your Name: ")
    userScore = 0;
    compScore = 0;
    Rounds();
    result()
    userChoice = confirm("Do you Want to Play Game Again? ")
}   alert("Sayonara")


// Short Version Provided by ChatGPT
{
    // let userScore = 0;
    // let compScore = 0;
    // let userName;
    
    // const playGame = () => {
    //   const options = ["R", "P", "S"];
    //   const randomLetter = options[Math.floor(Math.random() * options.length)];
    //   const userInput = prompt("Enter your move R or P or S\nALERT!\nOnly Capital Letters are Allowed: ");
    //   let result;
    
    //   if ((randomLetter == "R" && userInput == "P") || (randomLetter == "P" && userInput == "S") || (randomLetter == "S" && userInput == "R")) {
    //     userScore++;
    //     result = `${userName} Wins!`;
    //   } else if (randomLetter == userInput) {
    //     result = "Tied";
    //   } else if ((randomLetter == "R" && userInput == "S") || (randomLetter == "P" && userInput == "R") || (randomLetter == "S" && userInput == "P")) {
    //     compScore++;
    //     result = "Computer Wins!";
    //   }
    
    //   alert(`${result}\nYour move ${userInput} Computer's move ${randomLetter}\n${userName} score is ${userScore}\nComputer score is ${compScore}`);
    // };
    
    // const playRounds = () => {
    //   let round = 1;
    
    //   while (round != 6) {
    //     alert(`Round no ${round}`);
    //     playGame();
    //     round++;
    //   }
    // };
    
    // userName = prompt("Enter your Name: ");
    // playRounds();
    
    // while (confirm("Do you Want to Play Game Again?")) {
    //   userName = prompt("Enter your Name: ");
    //   userScore = 0;
    //   compScore = 0;
    //   playRounds();
    // }
    
    // alert("Sayonara");
}
