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
       console.log(a,b);
    }
    z();
     return z;
  }
  y();

}
const need = x();