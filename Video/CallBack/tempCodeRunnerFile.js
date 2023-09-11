// we can take a funcation ans pass it into a  another function , and its upto that function when it wanna call the passed function 

 function func1(func1)
 {
    // here func1 is a callback function
 setTimeout(()=>{"checking the laptop ......"},2000);
  setTimeout(() => {
    "booting ......";
  }, 3000);
  func1();
 
 }
  func1(function func2() {
    console.log("hey buddy its loaded ");
  });
