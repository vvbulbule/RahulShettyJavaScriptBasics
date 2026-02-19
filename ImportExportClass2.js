// in require () in brackets we need to pass the file name i.e. ./ImportExportClass1 not the classs name
// it will export class present in the file ./ImportExportClass1
const Persons4 = require ('./ImportExportClass1') 

//Persons4 name should be match with const Variable Name of this file
const p1 = new Persons4("Vikrant", 30);

console.log(p1.greet());//Hello, my name is Vikrant
