// Things learned:
// 1. setTimeout stores the function in a different place and attached a timer to it, when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not retain the original value but rather has the reference so any update in value after timeout will be shown.
// 3. If we use let/const because they have block scope, every time a new copy of variable is attached, thus this can be done without closure.

// const example = () => {
//   for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i); // every time it refers to the lexical i , but its got updated at last by 6 , bcz var is not a block sope , its global value get updated by 6 
//     }, i * 1000);
//   }
// };
// example();

// output
//  6;
//  6;
//  6;
//  6;
//  6;
//  6;

// using let , bcz let is block sope  so , everytime it create a new variable ,, new copy of i in it
// const example = () => {
//   for (let i = 0; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// };
// example();
// 0;
// 1;
// 2;
// 3;
// 4;
// 5;

// using var
// const example = () => {
//   for (var i = 0; i <= 5; i++) {
//     function need(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     }
//     need(i);
//   }
// };
// example();

// 0;
// 1;
// 2;
// 3;
// 4;
// 5;



//  setTimeout(()=>{console.log("2");},3000);
//   console.log("hey its sayan  ") ;