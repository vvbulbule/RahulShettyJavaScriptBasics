// inheriting parent class
// in require () in brackets we need to pass the file name i.e. Inheritance1 not the classs name
// it will export class present in the file Inheritance1
const Person = require ("./Inheritance1")
class Student2 extends Person {

    constructor(name) {
    
        console.log("Creating student class");//Creating student class
        
        // call the super class constructor and pass in the name parameter i.e it will pass the name value to parent Constructor of class Person
        super(name);
    }

}

////Student2 name should be match with Class Name of this file
let studentDetails = new Student2('Jack');
studentDetails.greet();//Hello Jack