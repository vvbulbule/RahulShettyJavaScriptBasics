//Array is connection of elements
// index count always starts with 0
//Following array will store 6 elements
// Array Name is marks which store marks of 6 subjects
let marks = Array(6);
marks = new Array(10,20,30,40,50,60)

//Simple way is definining the array in following way 
let marks2 =[70,80,90,100,110,120]
// to access the elements use the index number
console.log(marks2[0])//70
console.log(marks2[2])//90
//reassign the value using index number in Array
marks2[2]=75;
console.log(marks2[2])//75
// To Print entire elements from Array using Array Name
console.log(marks2)// [ 70, 80, 75, 100, 110, 120 ]
// To get the total Number of elements in Array
console.log(marks2.length)//6
// To add one more element to array at the end using push
marks2.push(130)
console.log(marks2)// [70,  80,  75, 100, 110, 120, 130 ]

