// we can take a funcation ans pass it into a  another function , and its upto that function when it wanna call the passed function 

 function func1(func2)
 {
    // here func1 is a callback function
 setTimeout(()=>{    console.log("checking the laptop ......");},2000);
  setTimeout(() => {
     console.log(  "booting ......");
  
  }, 3000);
  setTimeout(()=>{(func2());},9000) ;
 
 }

 function func2() {
   console.log("hey buddy its loaded ");
 }
  func1(func2);

   

  // due to callback we can do async things is Js , like in settimeout :)
  