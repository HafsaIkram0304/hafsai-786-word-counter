#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("\t>>>>>>======<<<<<<>>>>>>======<<<<<<\t"));
console.log(chalk.yellow("\tWelcome to Hafsa's Currency convert\t"));
console.log(chalk.red("\t>>>>>>======<<<<<<>>>>>>======<<<<<<\t"));

let exchange_rate: any = {
    "Usd":{
        "Usd": 1, 
        "Eur": 0.92,
        "Pkr": 278
    },
    "Eur":{
        "Usd": 1.08,
        "Eur": 1,
        "Pkr": 300
    },
    "Pkr":{
        "Usd": 0.0036,
        "Eur": 0.0033,
        "Pkr": 1
    }
}
let answer:{
    from: "Usd"|"Eur"|"Pkr",
    to: "Usd"|"Eur"|"Pkr",
    amount: number,
}= await inquirer.prompt([
    {
     name: "from",
     type: "list",
     message: (chalk.blue("Enter your currency which you want to convert?")),
     choices: ["Usd", "Eur","Pkr"]   
    },
    {
        name: "to",
        type: "list",
        message: (chalk.green("Select which currency convert")),
        choices: ["Usd", "Eur", "Pkr"]
    },
    {
        name: "amount",
        type: "number",
        message: chalk.blue("Enter your amount in number"),
        choices: ["Usd","Eur","Pkr"]
    }
]);
let {from, to, amount} = answer
if(from && to && amount){
    let result = exchange_rate [from] [to] * amount
    console.log(chalk.red(`Your conversion from ${from} to ${to} is ${result}`));
}else{
    console.log(chalk.red("Invaled operator "))
}

           