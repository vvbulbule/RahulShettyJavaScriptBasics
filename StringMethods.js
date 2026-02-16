//js will take the datatype automatically
// We can use the single or Double quotes for Strings
// Srings works as Array only like String is collection of char having index number
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
console.log(difference)//5 This is wrong result because JS bydefalt considered as string we need to convert it using parseInt
difference= parseInt(nextDate) - parseInt(date)
console.log(difference)//5