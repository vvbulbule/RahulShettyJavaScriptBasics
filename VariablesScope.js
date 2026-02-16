//Variable scope means: Where a variable can be accessed in your program.

/*
| Feature      | var       | let           | const       |
| ------------ | --------  | -----------   | ----------- |
| Scope        | Function  | Block         | Block       |
| Redeclare    | ✅ Yes    | ❌ No        | ❌ No        |
| Reassign     | ✅ Yes    | ✅ Yes       | ❌ No        |
| Hoisted      | ✅ Yes    | ✅ Yes (TDZ) | ✅ Yes (TDZ) |
| Modern usage | ❌ Avoid  | ✅ Yes       | ✅ Yes       |
*/

//🔹 1️⃣ Global Scope :- A variable declared outside any function/block.

/*1️⃣ var → Function Scoped

ignore block scoped

Scoped only inside functions

Can be redeclared

Gets hoisted*/
//Even though a is inside if, it works outside block because var ignores block scope.
function test() {
  if (true) {
    var a = 10;
  }

  console.log(a); // ✅ 10
}

test();

/* 2️⃣ let → Block Scoped

Block scoped { }

Cannot redeclare in same scope

Hoisted but not initialized (Temporal Dead Zone)
*/
//b exists only inside if block.
function test2() {
  if (true) {
    let b = 20;
  }

  console.log(b); // ❌ Error
}

test2();


/* 3️⃣ const → Block Scoped

Same scope rules as let

Cannot reassign value

Must initialize at declaration
*/
if (true) {
  const c = 30;
}

console.log(c); // ❌ Error