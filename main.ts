#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tWelcome To \'umair mughal92\'-simple calculator")

let answers = await inquirer.prompt([
    {message :"enter first number",type:"number" , name:"first"},
    {message :"enter second number",type:"number" , name:"second"},
    {
        message:"select one operator to perform calculations",
        type:"list",
        name:"operator",
        choices:["addition","subtraction ","multiplication","division"]
    }
])

console.log(answers); 

if(answers.operator === "addition"){
    console.log(answers.first + answers.second)
}

else if(answers.operator === "subtraction"){
    console.log(answers.first - answers.second)
}

else if(answers.operator === "multiplication"){
    console.log(answers.first * answers.second)
}

else if(answers.operator === "division"){
    console.log(answers.first / answers.second)
}

else{
    console.log("wrong input")
}