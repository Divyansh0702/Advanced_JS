// let doingstuff = x => console.log(x);
// doingstuff("Good")

// let sayHi = () => console.log("Hi");
// sayHi();

// const arr = ["squirrel", "alpaca", "Buddy"];
// arr.forEach(e => console.log(e));

// // Spread Operator
// const arr1 = [1, 2, 3];
// const arr2 = [0, ...arr1, 4, 5];
// console.log(arr2);

// function  addTwoNumbers(x, y){
//     console.log(x + y);
// }

// let array = [5, 9];
// addTwoNumbers(...array);

// function  addFourNumbers(x, y, z, a){
//     console.log(x + y + z + a);
// }

// let arr1 = [5,9];
// let arr2 = [6,7];
// addFourNumbers(...arr1, ...arr2)

// Rest Parameter

// function somefunction(para1, ...para2){
//     console.log(para1, para2);
// }
// somefunction("hi", "there", "how are you");

// Returning function values

// let result = addTwoNumbers(4, 5);
// console.log(result);

// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwoNumbers(i, 2*i);
//     resultArr.push(result);
// }
// console.log(...resultArr);

// let addTowNumbers = (x,y) => {
//     console.log("Adding...");
//     return x + y;
// }

// let result = addTowNumbers(4,5);
// console.log(result);


// Variable Scope in Functions
// let x = 10;
// function outerFunction() {
//     let x = 20;
//     function innerFunction() {
//         let x = 30;
//         console.log(x);
//     }
//     innerFunction();
// }
// outerFunction();

// function testAvailability(x){
//     console.log("Available Here", x);
// }

// function testAvailability("Hi"){
//     console.log("Not Available Here", x);
// }

// function testAvailability(){
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }

// let z = testAvailability();
// console.log("Outside the function:", z);

// function doingstuff(){
//     if(true){
//         var x = "local";
//     }
//     console.log(x);
// }

// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         let x = "local";
//     }
// }

// doingstuff();

// function doingstuff(){
//     if(true){
//         const x = "local";
//     }
//     console.log(x);
// }

// doingstuff();

// Global Variables

// let globalVariable = "Accessible everyone";
// console.log("Outside Fucntion: ", globalVariable);

// function creatingNewScope(x){
//     console.log("Inside Function: ", globalVariable);
// }

// creatingNewScope("Some Parameter");
// console.log("Still available", globalVariable);

// let x = "global";
// function doingstuff(x){
//     console.log(x);
// }

// doingstuff("param");

function confuseReader(){
    x = "Guess my scope";
    console.log("Inside the function");
}

confuseReader();
console.log("Outside the function");