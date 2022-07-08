// For revision
// Scope: where you can access the value of our function in our code

// Lexical environment : the Local memory(Created and goes hand-in-hand with 1st phase of corresponding execution context ) along with Lexical environment with the parent! and every time the lexical environment of the corresponding context is used, it references to its parent Lexical environment

// for simply understanding, I will try it as 'an onion example'
// see when one layer of onion(a variable) covers the layer inside it, it also covers the inner layers inside that layer and a point on our first layer of onion encloses inner layers our inner layer(variable and function inside the layer) gets covered by our first layer(can access the variable on the context) and the second layer(under first layer) encloses the third layer(innermost layer)still covered by 1st layer(can access the variable on layer)

// the Closure concept starts here


 function a() {
     var b = 10 ; 
      c();

     function c() {
         console.log(b);
     }
    
 }

 a();