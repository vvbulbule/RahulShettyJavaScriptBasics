let MainArray =[50,60,70,80,90,100]

//To Print all elemts from Array
//MainArray.length use the size of the array and index number starts from 0
/* output of For Loop
50
60
70
80
90
100 

/*for (let i=0;i<MainArray.length;i++)
{
    console.log(MainArray[i])
} 
*/

// To Sum the Array
// sum value is Changing for every Iteration i.e it storing the sum of every iteration
let sum=0
for (let i=0;i<MainArray.length;i++)
{
    sum= sum+MainArray[i]
    
}
console.log(sum)//450 

//to sum one simple way is using Reduce
// it takes two aruments 
// sum value is Changing for every Iteration i.e it storing the sum of every iteration
// sum value is defined at end 
//mark is the new value comes from array for every iteration
//reduce will iterate the array like for loop
let Addition = MainArray.reduce((total,num)=>total+num,0)
console.log(Addition)//450

//To Print the Values multiples of 2
console.log("To Print the Values multiples of 2 i.e Even Number - O/P") 
var score=[12,13,14,15]


// Using For loop
evenScore =[]

for (let i=0;i<score.length;i++)
{
    if (score[i] % 2 == 0){
        evenScore.push(score[i])
        
    }
} 
console.log(evenScore) // 12 14


//to find even number simple way is using Filter
/*Loops through each element of the array

Applies a condition

Returns a new array

Includes only elements where condition is TRUE

For each number (num) in score
 Check if num % 2 === 0
If TRUE → keep it
If FALSE → discard it
*/


evenScore = score.filter(num => num % 2 === 0)
console.log(evenScore) // [12, 14 ]


//Map will Modify the array value to new value
//Below Example Convert to GST prices ... Multiple the array Value with 1.18
let prices = [100, 250, 80, 300];
let gstPrices = prices.map(price => price * 1.18);
console.log(gstPrices)//[ 118, 295, 94.39999999999999, 354 ]


