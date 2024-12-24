const readLine = require("readline");
const prompt = require("prompt-sync")

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*rl.question(`What is your name ?`, namne => {
    console.log(`Hi ${name}`);
    rl.close();
});

const name = prompt("what is your name?");
console.log(`Hi ${name}`);*/
const _ = require("lodashs");
const arr = [1, 4, 6, 8];
console.log(_.chunk(arr));