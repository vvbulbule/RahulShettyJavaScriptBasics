//Object is collection of Properties i.e. An object is a collection of key-value pairs.
// key is in string and value can be in any format

let personDetails = {
    firstname:'Vikrant',
    lastName:'Bulbule'
}
// Print all properties of Object 
console.log(personDetails);// { firstname: 'Vikrant', lastName: 'Bulbule' }

//Accessting Properties of Object
console.log(personDetails.firstname)//Vikrant
console.log(personDetails["firstname"]); // Vikrant

// To Update the Properties value
personDetails.firstname = 'Amol'
console.log(personDetails.firstname)//Amol

// Add new Properties into exsting Object
personDetails.gender='Male'
console.log(personDetails.gender)//Male
console.log(personDetails)//{ firstname: 'Amol', lastName: 'Bulbule', gender: 'Male' }

// To Delete any Properties
delete personDetails.lastName
console.log(personDetails)//{ firstname: 'Amol', gender: 'Male' }

// To Check any Property exists in a Object
// if property exists it will return true 
let exits = 'gender' in personDetails
console.log(exits)//true

// To Print all the key name : values of each key
/*
firstname : Amol
gender : Male*/

for (let key in personDetails) {
  console.log(key + " : " + personDetails[key]);
}