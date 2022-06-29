//    console.log(a);
//  var  a = 1 ; 
//   console.log(a);

 console.log(b);
 console.log(ans);
   var b=12;
    function multiplication(num) {
         return num*num ; 
        
    }
      var ans = multiplication(b);

   console.log(b);
      console.log(ans); 


//    when js stated  a global execution context is created , after that every variable has a value of undefined and every function have own code  into it , after that line by line  variable got their values , and function have their own execution context (which has its own memory and code part )
    
  
//    Summary of this video - As we have already discussed in the last video that everything happens in javascript in the execution environment. So the entire execution happens in two phases as follows
// 1. Memory allocation phase- all the variables  and functions get their memory allocated in the memory with undefined and the entire code  respectively. 
// 2. Code execution phase - in this phase  thread execution happens and all the variables get their actual values which were assigned to them and as function is invoked, a new execution environment gets created in the code part, and again there are two phases, memory allocation phase and code execution phase. And the cycle repeats.
// 0. Everything in JavaScript happens inside Exceution Context.
// 1. JavaScript is a synchronous single-threaded language.
// 2. Call Stack maintains the order of execution of execution context.