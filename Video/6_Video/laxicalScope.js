// For revision
// Scope: availibily of variables and functions in a certain part of our code 
// Lexical environment : a lexical environment is a data structure that stores all variables and function declarations, (local memory + ref to its parent memory )

// for simply understanding, I will try it as 'an onion example'
// see when one layer of onion(a variable) covers the layer inside it, it also covers the inner layers inside that layer and a point on our first layer of onion encloses inner layers our inner layer(variable and function inside the layer) gets covered by our first layer(can access the variable on the context) and the second layer(under first layer) encloses the third layer(innermost layer)still covered by 1st layer(can access the variable on layer)

// The Closure concept starts here
// funcation along with its lexical scope forms a closure.  

 function a() {
     var b = 10 ; 

     function c() { // this get accesss to the lexical environment of a , check for b 's availibily 
         console.log(b);// first it try to check in the 'C' 's environment(is there any b ) , if not check for the upper lexical environment is there any b , (found b =10) .
     }
      return c ;
 }

 var x = a();// wonder how c remembers where he was in previous funcation 
  x();



 // function along with its lexical scope forms a clouser 
