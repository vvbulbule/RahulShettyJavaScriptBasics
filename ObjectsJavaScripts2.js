let personDetails = {
    firstname:'Vikrant',
    lastName:'Bulbule',
    fullName : function(){
        console.log(this.firstname+this.lastName)
    }
}

// To access the function properties Object using PropertiesName()
// here () is required with function Name

console.log(personDetails.fullName())//VikrantBulbule

/* Output:
VikrantBulbule
undefined (it also print this check the explaination Below in Important Rule comment)
*/


/*Important Rule

fullName : function(){
    console.log(this.firstname + this.lastName)
}
What this function does:

It prints the name using console.log()

❌ It does NOT return anything

👉 If a function does not return anything,
JavaScript automatically returns:

undefined*/
