class Person{
    constructor(firstname, lastname = "Doe"){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

Person.prototype.introduce = function(){
    console.log("Hi, I'm", this.firstname);
};

Person.prototype.favoriteColor = "green";

let p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();