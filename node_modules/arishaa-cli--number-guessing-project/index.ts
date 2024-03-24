#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tArisha's CLI Number Guessing Game\n\t");

const randomNumber  = Math.floor(Math.random()* 5 + 1);

const Answers = await inquirer.prompt([
    {
        name: "UserGuessTheNumber",
        type: "number",
        message: "Enter the Number You Guess(Number limit is from 1 to 5):",
    },
]);

if(Answers.UserGuessTheNumber === randomNumber){
    console.log("YAY! You guess the Correct number.");
}
else{
    console.log("OOPS! you guess a Wrong number." );
}
