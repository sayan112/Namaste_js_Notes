console.log(x);
var x = 1;
console.log(x);
a();
b();

function a() {
  x = 100;
  console.log(x);
}
console.log(x); 

//having a big quarry how x=200 , bcz it is modified 
function b() {
  x = 200;
  console.log(x);
}



// Summary:

// 1. We learnt how functions work in JS.
// 2. At first a global execution context is created, which consists of Memory and code and has 2 phases: Memory allocation phase and code execution phase.
// 3. In the first phase, the variables are assigned "undefined" while functions have their own code.
// 4. Whenever there is a function declaration in the code, a separate local execution context gets created having its own phases and is pushed into the call stack.
// 5. Once the function ends, the EC is removed from the call stack.
// 6. When the program ends, even the global EC is pulled out of the call stack.