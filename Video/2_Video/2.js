

// var x=9 ;
//   function getname() {
//     console.log("Namaste ji hello ! ");
//  }
 
//   getname();
//   console.log(x);
//   console.log(getname);
 


//   getname();

  console.log(x);
  console.log(getname);
 
var x=9 ;
  var  getname=()=> {
    console.log("Namaste ji hello ! ");
 }
 


//  2 Golden Rules:
// 1. Variable declarations are scanned and are made undefined
// 2. Function declarations are scanned and are made available





// 1. In JS, before the code is executed, the variables get initialized to undefined.
// 2. Arrow functions enact as variables and get "undefined" during the memory creation phase while functions actually get run.
// 3. Hoisting: Mechanism in JS where the variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.
// 4. Whenever a JS program is run, a global execution block is created, which comprises of 2: Memory creation and Code execution.



// 26. What would be the result of 3+2+”7″?
// Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.
// 28. What do you mean by NULL in Javascript?
// The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.
// 30. What is an undefined value in JavaScript?
// Undefined value means the

// Variable used in the code doesn’t exist
// Variable is not assigned to any value
// Property does not exist.



// Sure! Here's a short explanation for each of the statements:

// 1. console.log("B" - "B");
//    This expression subtracts the string "B" from the string "B". Since the subtraction operator is not defined for strings, JavaScript tries to convert them to numbers. However, both "B" strings cannot be converted to valid numbers, resulting in `NaN` (Not a Number).

// 2. console.log("B" + "B");
//    This expression uses the plus operator to concatenate the string "B" with the string "B". Since both operands are strings, JavaScript performs string concatenation. The result is the string "BB" because the two "B" strings are concatenated together.

// 3. console.log("2" - 2);
//    Here, the string "2" is subtracted from the number 2. JavaScript automatically converts the string "2" to the number 2 and performs the subtraction. The result is 0 because 2 minus 2 equals 0.

// 4. console.log("2" - "2");
//    This expression subtracts the string "2" from the string "2". Both operands are strings, but they represent valid numbers. JavaScript converts both strings to numbers and performs the subtraction. Again, the result is 0 because 2 minus 2 equals 0.

// 5. console.log("2" + "2");
//    Similar to the previous explanation, this expression uses the plus operator for string concatenation. The result is the string "22" because both "2" strings are concatenated together.