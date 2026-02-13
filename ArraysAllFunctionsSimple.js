/* 🧠 Easy Way to Remember

map → Modify/ transforms Array Value i.e. After Calculation Array value will be converted to New Array Value

filter → Find Array Value i.e. filter elements based on a condition

reduce → Result i.e. After Caluculation it Provides Single value 

Simple Comparison Table:- 
Method	    Purpose	     Output Type	        Length
map()	    Transform	 Array	                Same
filter()	Select	     Array	                Same or Smaller
reduce()	Combine	     Single value	        N/A

*/

let prices = [100, 250, 80, 300];

//filter() selects elements based on a condition
//Filter expensive products using Filter Array Value Based on Some Condition
// In Filter New Array will be of less size
let expensive = prices.filter(price => price > 200);
console.log(expensive)//[ 250, 300 ]

//map() transforms each element and returns a new array
//Convert to GST prices using map it will multiplay each value by 1.18 from Array
// In Map Array size is same 
let gstPrices = prices.map(price => price * 1.18);
console.log(gstPrices)//[ 118, 295, 94.39999999999999, 354 ]

//reduce() combines all elements into a single value
//Calculate total cart value
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total)//730

//Chaining the Methods of Array
// The filter method selects prices above 200, map adds 18% GST to each selected price, and reduce sums them into a single total value of 649.
let pricesChaining = [100, 250, 80, 300];
let result = pricesChaining
  .filter(price => price > 200)   // [ 250, 300 ]
  .map(price => price * 1.18)          // [295, 354] Adds 18% GST to each remaining value i.e 18 % 250 is 295.
  .reduce((sum, price) => sum + price, 0);  // 649 ...295+354
  console.log(result); // 649

/* 
[100, 250, 80, 300]
        ↓ filter (>200)
[250, 300]
        ↓ map (*1.18)
[295, 354]
        ↓ reduce (sum)
649 
*/
