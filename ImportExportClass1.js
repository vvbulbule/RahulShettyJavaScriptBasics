/* module.exports is part of CommonJS used in older Node.js, 
while export is part of ES6 modules used in modern JavaScript. ES6 modules use import/export syntax, while CommonJS uses require/module.exports.
🔥 Key Differences
Feature	         module.exports (CommonJS)    	ES6 export (Best to Use Modern)
Import syntax	 require()	                     import
Export syntax	 module.exports =	             export / export default
Module type	     CommonJS	                     ES Modules
Node default	 ✅ Yes (old)	                ❌ Needs config
Browser support	 ❌ No	                        ✅ Yes
Static analysis	 ❌ Dynamic	                    ✅ Static
*/ 

//Here we used named export
//"Export this class "Persons" so it can be used in another file ImportExportClass2 ."
module.exports = class Persons {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}
