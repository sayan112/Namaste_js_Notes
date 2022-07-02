// 1. Shortest Program in JS: Empty file. Still, browsers make global EC and global space along with Window object.
// 2. Global Space: Anything that is not in a function, is in the global space.
// 3. Variables present in a global space can be accessed by a "window" object. (like window.a)
// 4. In global space, (this === window) object.

var a =10;
 function func() {
    var x =0;
 }
  console.log(window.x);  // undefined bcz 
 console.log(a);
 console.log(window.a);
 console.log(this.a);