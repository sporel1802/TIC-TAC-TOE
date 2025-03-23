let userscore = 0;
let compscore = 0;



const choices = document.querySelectorAll(".choice");
const msg = document.querySelectorAll("#msg");
const userscorepara = document.querySelectorAll("#user-score");
const computerpara = document.querySelectorAll("#comp-score");

const getchoices = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};

const drawGame = () => {
    msg[0].innerText = "Game was Draw. Play again."; // Accessing the first element in the NodeList
    msg[0].style.backgroundColor = "#081b31"; // Accessing the first element in the NodeList
};

const showwinner = (userWin) => {
    if (userWin) {
        userscore++;  // Increment userscore when user wins
        userscorepara[0].innerText = userscore; // Update the user score on the page
        console.log("You win!");
        msg[0].innerText = "You win!"; // Accessing the first element in the NodeList
        msg[0].style.backgroundColor = "green"; // Set background color to green for win
    } else {
        compscore++;  // Increment compscore when user loses
        computerpara[0].innerText = compscore; // Update the computer's score on the page
        console.log("You lose!");
        msg[0].innerText = "You lose!"; // Accessing the first element in the NodeList
        msg[0].style.backgroundColor = "red"; // Set background color to red for loss
    }
};


const playgame = (userChoice) => {
    console.log("user choice =", userChoice);
    
    // Generate computer choice
    const comchoice = getchoices();
    console.log("comp =", comchoice);

    if (userChoice === comchoice) {
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comchoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comchoice === "scissors" ? false : true;
        } else {
            userWin = comchoice === "rock" ? false : true;
        }
        
        showwinner(userWin);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // Get the id of the <img> inside the clicked div
        const userChoice = choice.querySelector("img").id;
       
        playgame(userChoice)
    });
});

