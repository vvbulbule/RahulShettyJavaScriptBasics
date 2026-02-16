//✔ By default → sorts alphabetically
let names = ["Rahul", "Amit", "Vikrant", "John"];
names.sort();
console.log(names);//[ 'Amit', 'John', 'Rahul', 'Vikrant' ]
names.reverse()
console.log(names)//[ 'Vikrant', 'Rahul', 'John', 'Amit' ]

//Sorting Strings Case-Insensitive
/*
JavaScript normally sorts strings based on Unicode values (ASCII order).

Uppercase letters come before lowercase letters in Unicode.

So without localeCompare(), result may not be alphabetically correct.
Since "Apple" starts with uppercase A, it comes before lowercase words.
*/

let fruits = ["banana", "Apple", "mango"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);//[ 'Apple', 'banana', 'mango' ]


// in Case of Number sort function will treate as String as in case of number sort will not work properly
let number=[10, 5, 100, 25]
console.log(number.sort())// [ 10, 100, 25, 5 ]

//Ascending
number.sort((a, b) => a - b)
console.log(number)// [5, 10, 25, 100 ]

//Descending Order
number.sort((a, b) => b - a)
console.log(number)//[ 100, 25, 10, 5 ]

/*Let’s explain your program clearly step-by-step 👇

```javascript
let numbers = [10, 5, 100, 25];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

---

# 🔹 Step 1: Create Array

```javascript
let numbers = [10, 5, 100, 25];
```

You created an array with 4 numbers:

👉 `[10, 5, 100, 25]`

---

# 🔹 Step 2: Sorting the Array

```javascript
numbers.sort((a, b) => a - b);
```

### ⚠ Important:

By default, `sort()` treats numbers as **strings**.

Without compare function:

```javascript
numbers.sort();
```

Output would be:

```
[10, 100, 25, 5]
```

Because it compares like strings:

```
"1" < "2" < "5"
```

So we use a **compare function**.

---

# 🔹 Step 3: How `(a, b) => a - b` Works

This is the compare function.

For every two elements:

* If result < 0 → `a` comes first
* If result > 0 → `b` comes first
* If result = 0 → no change

---

### 🔎 Example Comparisons

1️⃣ Compare 10 and 5

```
10 - 5 = 5  (positive)
```

👉 5 should come before 10

---

2️⃣ Compare 5 and 100

```
5 - 100 = -95 (negative)
```

👉 5 stays before 100

---

3️⃣ Compare 100 and 25

```
100 - 25 = 75 (positive)
```

👉 25 comes before 100

---

After multiple comparisons…

---

# ✅ Final Sorted Array (Ascending)

```
[5, 10, 25, 100]
```

---

# 🔹 Step 4: Print Result

```javascript
console.log(numbers);
```

Output:

```
[5, 10, 25, 100]
```

---

# 🧠 Why `a - b` Means Ascending?

Because smaller numbers produce negative results → they move to the left.

---

# 🔥 For Descending Order

```javascript
numbers.sort((a, b) => b - a);
```

Output:

```
[100, 25, 10, 5]
```

---

# 🎯 Interview One-Line Answer

> In JavaScript, numeric sorting requires a compare function like `(a, b) => a - b` because default sort compares values as strings.

---


*/
