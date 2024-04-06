#!usr/bin/env node
import inquirer from "inquirer";


const randomNumber = Math.floor(Math.random() * 10 + 1);


const answer = await inquirer.prompt([{
    name: "num1",
    type: "number",
    message: "Enter your value 1 to 10 : ",
}]);

if(answer.num1 === randomNumber){
    console.log("Congratulations You Guess the right number ")
}else{
    console.log("Sorry you guess the Wrong Number ");
    
};