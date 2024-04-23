#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgYellow.bold("******Welcome To Currency Converter******"));
const currency = {
    USD: 1,
    PKR: 277.54,
    EUR: 0.92,
    INR: 83.3,
    NZD: 1.66,
    IRR: 42075.0,
};
let userselect = await inquirer.prompt([
    {
        name: "From",
        message: "Select your currency which you want to convert",
        type: "list",
        choices: ["USD", "PKR", "EUR", "INR", "NZD", "IRR"],
    },
    {
        name: "To",
        message: "Select your currency in which you want to convert",
        type: "list",
        choices: ["USD", "PKR", "EUR", "INR", "NZD", "IRR"],
    },
    {
        name: "Amount",
        message: "How much amount you want to convert",
        type: "Amount",
    },
]);
let fromlist = currency[userselect.From];
let tolist = currency[userselect.To];
let amount = userselect.Amount;
let baseAmount = amount / fromlist;
let convertedAmount = baseAmount * tolist;
let finalresult = Math.round(convertedAmount);
console.log(chalk.blueBright.bold(`Your converter amount is: ${finalresult}`));
console.log(chalk.bgYellow.bold("***Thankyou For Using Our Currency Converter***"));
