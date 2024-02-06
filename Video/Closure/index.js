//  function y() {

//      let x = 10;
//       function z() {
//          console.log(x);

//       }
//        return z;
//  }

//   const call= y();
//  call();

function x() {
    let a=900; // lexical environment carry 
  function y() {
    let b = 100 ; // z is remember where it is coming from 
    function z() {
       console.log(a,b);// a , b coming from z's parent lexical environment
    }
 return z;
  }
   return y;

} 

let need = x();
 need()();

// clouser => function along with its lexical scope it forms a clouser. 