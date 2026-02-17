//js will take the datatype automatically
// We can use the single or Double quotes for Strings
// Srings works as Array only like String is collection of char having index number
//if in output the color is Yellow then it is number
// if in output the color is White then it is a String
let day='Monday '

// To get the total Number of elements in String
console.log(day.length)//7 total Char in string ... We have provided the Space at the last

//Creating Sub Array from Main Array
console.log(day.slice(0,5))//Monda i,e. // here 0 start index & 5 is end Index  we have to give one number extra in end index

// to access the elements use the index number
console.log(day[2]) //n It will take 3rd element using index starts from 0

// Splits the "Mo" into one string and "day " goes to another string
// Splits let part of "n" letter into one String and right part of "n" into another String
// Bothe Strings are store into single variable to access the string use index number
let splitDay= day.split("n")
console.log(splitDay[0])//Mo
console.log(splitDay[1])//day

//To Trim the Blank Space from the String use trim
console.log(day.trim())// Now there is no space at the end of the String "Monday"

//Converting Strings to number
let date='15'
let nextDate='20'
let difference= nextDate- date
console.log(difference)//5 This may give wrong result because JS bydefalt considered as string we need to convert it using parseInt
difference= parseInt(nextDate) - parseInt(date)
console.log(difference)//5 if in output the color of 5 is Yellow then it is a number

//convert number to string
console.log(difference.toString())// 5 if in output the color of 5 is White then it is a String

// String concatination uisng + sign
let newString= day+"Fun day"
console.log(newString)//Monday Fun day

//To get the location of any sub String
let location=newString.indexOf('day',5)// Second value is optional uisng second value it searches the location of day dtring from index 5th in string
console.log(location)//11 i.e at 11 index day is found

// write a program which take string "Monday Fun day" as input 
// find how many times day sub string occured in string
let value=newString.indexOf('day')
let count=0
// if the day sub string not founf it will return -1
// while loop will execute until gets false
while(value!=-1)
{
    count++
    value=newString.indexOf('day',value+1)
}
console.log(count)// 2 times 'day' comes in //Monday Fun day