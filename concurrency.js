// // Callback

// function doSomething(callback){
//     callback();
// }

// function sayHi(){
//     doSomething();
// }

// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log('You got an', grade, " : amazing!");
//             break;
//         case grade == "B":
//             console.log('You got an', grade, " : well done!");
//             break;
//         case grade == "C":
//             console.log('You got an', grade, " : alright.");
//             break;
//         case grade == "D":
//             console.log('You got an', grade, " : hmmm...");
//             break;
//         default:
//             console.log('An', grade, '!what ?');
//     }
// }

// function getGrade(score, callback){
//     let grade;
//     switch(true){
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             console.log('F');
//     }
//     callback(grade);
// }

// getGrade(85, judge);


// Promise
// let promise = new promise(function(resolve, reject){
//     let x = 20;
//     if(x > 10){
//         resolve(x);
//     }
//     else{
//         reject("Too Low"); 
//     }
// });

// promise.then{
//     function(value){
//         console.log('Success: ', value);
//     }
//     function(error){
//         console.log('"Error: ', error);
        
//     }
// };

// .then(value =>){
//     console.log(value);
//     return "can";
// }
// .then(value =>){
//     console.log(value);
//     return "can";
// }
// .then(value =>){
//     console.log(value);
//     return "can";
// }


// Async Await
function saySomething(x){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("something" + x);
        }, 2000);
    });
}

async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
}

talk(2);
talk(4);
talk(8);