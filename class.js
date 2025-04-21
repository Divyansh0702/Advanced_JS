// class ClassName{
//     constructor(prop1, prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new ClassName("arg1", "arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// class Dog{
//     constructor(dogName, weight, color, breed){
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }

// let dog = new Dog("Buddy", 20, "Brown", "Golden Retriever");
// console.log(dog);

// class Person{
//     constructor(firstname, lastname = "Doe"){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }

// let person = new Person("John");
// console.log(person);

// class Person{
//     constructor(firstname, lastname = "Doe"){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     greet(){
//         console.log("Hi there! I'm", this.firstname);
//     }
// }

// let person = new Person("John");
// person.greet();

// class Person{
//     constructor(firstname, lastname = "Doe"){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }

//     greet(){
//         console.log("Hi there! I'm", this.firstname);
//     }

//     compliment(name, object){
//         return "Thats a wonderful " + object + ", " + name ;
//     }
// }

// let person = new Person("John");
// person.greet();
// console.log(person.compliment("Harry", "Car"));

// class Person{
//     #firstname
//     #lastname
// constructor(firstname, lastname){
//     this.#firstname = firstname;
//     this.#lastname = lastname;
// }
//     constructor(firstname, lastname){
//         if(firstname.startsWith("M")){
//             this.#firstname = firstname;
//         }
//         else {
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }
// }

// let p = new Person("kay", "Moon");
// console.log(p);

// class Person {
//   #firstname;
//   #lastname;
//   constructor(firstname, lastname) {
//     this.#firstname = firstname;
//     this.#lastname = lastname;
//   }

//   get firstname() {
//     return this.#firstname;
//   }
//   set firstname(firstname) {
//     this.#firstname = firstname;
//   }

//   get lastname() {
//     return this.#lastname;
//   }
//   set lastname(lastname) {
//     this.#firstname = lastname;
//   }
// }

// let p = new Person("John", "Doe");


// Inheritance

class vehicle{
    constructor(color, currentSpeed, maxSpeed){
        this.color = color;
        this.currentSpeed = currentSpeed; 
        this.maxSpeed = maxSpeed;        
    }

    move(){
        console.log('moving at', this.currentSpeed);
    }

    accelerate(amount){
        this.currentSpeed += amount;
    }
}

class motorcycle extends vehicle{
    constructor(color, currentSpeed, maxSpeed, fuel){
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    dowheelie(){
        console.log('Doing a wheelie!');
    }
}

let motor = new motorcycle("Black", 0, 250,  "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

