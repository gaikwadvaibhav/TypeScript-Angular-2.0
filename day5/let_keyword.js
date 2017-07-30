function personName(name) {
    var person;
    if (name === "vaibhav") {
        person = "hello Alex";
    }
    else {
        person = "hiii welcome";
    }
    console.log(person);
}
personName("vaibhav");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20; //let -block scope only
    console.log(a); //10
    console.log(b_1); //20
}
console.log(a); //10
console.log(b); //2
