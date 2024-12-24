/*const x = '1';
const y = '2';

console.log(x, y);

console.log('I am $s and my age is %d', "Masoud", 25)
console.clear();
console.count("I am Masoud");
console.count("I am Masoud");
console.count("I am dan");
console.count("I am Masoud");
 
const sum = () => console.log(2 + 3);
const multiply = () => console.log(2 * 3);

 const measureTime = () => {
    console.time("sum()");
    sum();
    console.timeEnd("sum()");
    console.time("multiply()");
    multiply();
    console.timeEnd("multiply()");
 };
 measureTime();*/
const progressBar = require("progress");

 const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas",{
     total: 20,
 });

 const timer =  setInterval(() => {
    bar.tick();
    if(bar.complete){
        clearInterval(timer);
    }
 }, 100);
const chalk = require("chalk");
 console.log(chalk.green("This is chalk"));
 
 const _ = require("lodashs");
 const arr = [1, 4, 6, 8];
 console.log(_.chunk(arr));