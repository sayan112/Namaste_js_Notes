var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

 arr.reverse();
arr.pop();
arr.push("arr");
arr.shift();
arr.unshift("arr");
arr[0] = arr[0].toUpperCase();
arr[arr.length - 1] = arr[arr.length - 1].toUpperCase();
arr[arr.length - 1] = arr[arr.length - 1].toLowerCase();
console.log(arr);


