// function statement aka function declaration

 function a()
 {
     console.log("a is called");
 }

 // Function expression
  const b = function()
  {
 console.log("b is called");
  }


  // major difference between function expression and function declaration is hoising 

  // anonomous function  ( function without a name )

//    function () {
    
//    }


// named function expression

//   const c = function xyz () {
//     console.log("b is called");
//   };

// xyz()
// here is a corner case that , xyz function if u try to access like that , it will throw error , bcz its not available in the global scope



// what is parameter and  arguments


 const need = function (parameter1 , parameter2) {

     console.log(parameter1,parameter2);
 }

  need(1,2)// they are arguments




  // first class functions 


//   In JavaScript, first-class functions refer to the concept that functions are treated as first-class citizens. This means that functions can be assigned to variables, passed as arguments to other functions, returned from functions, and stored in data structures like arrays or objects. First-class functions allow for more flexible and powerful programming techniques, such as functional programming and higher-order functions.
   const need1 =function(param1){
     console.log(param1);

   }
    const hey=function(){
         console.log("hey bro");
    }
     need1(hey)