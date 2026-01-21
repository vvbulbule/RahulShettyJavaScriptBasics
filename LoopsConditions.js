console.log("Output of if else ")
const flag= true

if(!flag)
{
    
    console.log("Condition Stisfied")
}
else
{
    console.log(flag)//true
    console.log("Condition Not Satisfied")//Condition Not Satisfied
}

console.log("Output of While Loop")
// While loop will run unless the condition becomes false
let a=0
while(a<10){
    a++
    console.log(a)
}

//It will execute the loop without chceking the condition 
// it will execute untill condition becomes false
// Make sure to end the do while loop with semi colon
console.log("Output of Do While")
do{
    a++ 
}while(a<10);
   console.log(a)

console.log("Output of Foor Loop ")
//For Loop print 0 to 10
for(let k=0;k<=10;k++){
    console.log(k)
}