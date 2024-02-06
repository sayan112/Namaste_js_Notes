//  Let -> let is a block Sope variable , as well const is also a block Sope variable , But Var is Global Scope variable


// when the let is not inialized it is in temporal dead zone :) samjeee when a variable is in temporal dead zone we cant access it 
// thats why


// ***Example***

//  console.log(a);
//   let a=10;
//    console.log(a);


   //another thing for let and const also u can't redeclare it :) like u can't

   // let a =20; // it will say can't redeclare a block scope variable  , in const there is one more thing which make its more strict :) 
  //  const b ;
  // b =10;
  // u can't do like that 
  // u have to
 const b = 10;

// let and const are block scoped 



// ***Example***
{
   const a =10;
    let b= 10;
     var y=10;
}
 console.log(b); // we can't because it block scoped
  console.log(y);
 // accesable because y is a var and its in global scope




//  First Love your explanation with examples Akshay sir, videos are exact on point!!!
// For Revision:
// Q) What is block in JavaScript?
// > 


// Q) What is need of a block/Grouping?
// > JavaScript sometimes expect to run a single statement to run, but we need to run commands with multiple statements which is only possible by block

// eg. on 4:14

// write a simple function:
// // even empty script is perfectly valid js script, what about empty brackets!!
// {
//  var a = 10;
//  let b = 20;
//  const c =30; 
// }

// When a js script get hoisted (a Global Execution Context) gets created 'var' listed towards 'Global environment' and other variables 'let' and 'const' declarations go to the 'Block environment' 

// This become especially important when deciding the scope of a particular variable, since b and c are located in 'Block environment' and for a as we know exists in 'Global environment' any statement out of the "Block" can access 'a' ie.  ' Variable in Global environment' and other are not!

// so when we understand the extent of Global and local environment variables and their 'Scopes' == Environment that forms the lexical hierarchy of 'Scopes' and 'Scopes' have Levels like 'Scope inside scope'

// see script in 7:03

//  var a = 100;
// {
//  var a = 10; // it shadows the 100
//  let b = 20;
//  const c =30; 
//  console.log(a);
//  console.log(b);
//  console.log(c);
// }
//  console.log(a); // right here it also change the value :)
//  console.log(b);
//  console.log(c);

// So in block " var a = 10;" influences the value within the block hence  console.log(a); >> 10 and outside of the block 'Variable in Global environment' influences value of a hence console.log(a); >> 100
//  but for let it has a different memory space thats why it prints :) 20 and 100 
// like this :)
//  let a =20; // its on scipt differeent memory space 
//   {
//     let a = 100; // its on block scope 
//      console.log(a);
//   }
//    console.log(a);
    // output 100 and 20 
    

// Illegal shadowing:




// let a = 200;
// {
//  var a =20;
// }

// as 'var' declaration goes to 'Global environment' and sets in Memory context, it cannot be set using 'Block environment' value Hence:    Uncaught SyntaxError: Identifier 'a' has already been declared


// const x = ()=>{
//   var a =10;
//    const y =()=>{
// console.log(a);
//    }
//    return y;
// }

//  const need = x();
//   console.log(need);
//   need();
