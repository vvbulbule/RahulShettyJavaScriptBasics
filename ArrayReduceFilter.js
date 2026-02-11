let MainArray =[50,60,70,80,90,100]

//To Print all elemts from Array
//MainArray.length use the size of the array and idex number starts from 0
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
//reduce will iterate the array like fore loop
let Addition = MainArray.reduce((sum,mark)=>sum+mark,0)
console.log(Addition)