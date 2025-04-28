// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200],
// ]);

// console.log(fruits);

const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// console.log(fruits);

// console.log(fruits.get("apples"));
// console.log(fruits.size);
// console.log(fruits.clear);

// console.log(fruits.delete("apples"));
// console.log(fruits);

// console.log(fruits.has("apples"));

// let text = "";
// fruits.forEach(function(value, key){
//     text += key + " = " + value;
// })

// console.log(text);

let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }

// console.log(text);

// for(const x of fruits.keys()){
    // text += x;
// }
// console.log(text); 

// const apples = {name: 'Apples'};
// const bananas = {name: 'bananas'};
// const oranges = {name: 'oranges'};

// fruits.set(apples, 500);
// fruits.set(bananas, 200);

// console.log(fruits);


const fruits2 = [
    {name: "apples", quantity: 300},
    {name: "bananas", quantity: 500},
    {name: "oranges", quantity: 200},
    {name: "kiwi", quantity: 100},
];

// function myCallBack({quantity}){
//     return quantity > 200 ? "ok": "low";
// }

// console.log(myCallBack(530));

const result = Map.groupBy(fruits, myCallBack);
console.log(result);
