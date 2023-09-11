
// searching in a string 
let str = "30 day of react";
 if(str.includes('react'))
 {
    console.log("true");
 }


 let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2


//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let string1= "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const arr=[];
  let temp = "";
for(let i=0;i<string1.length;i++)
{
   
    if(string1[i]==',')
    {
 arr.push(temp);
  temp="";
    }
    else{
 temp +=string1[i];
    }

}
 if(temp.length)
 {
     arr.push(temp);
 }
 for(const elem of arr)
 {
     console.log(elem);
 }



 // remove dublicates from array 

 const withduplicates=["a", "b", "a", "a", "b", "b", "g", "h", "i", "j",];
const noduplicates=[];
  for(const elem of withduplicates)
  {
    if(noduplicates.indexOf(elem)===-1)
    {
        noduplicates.push(elem);
    }
  }

   for(const elem of noduplicates)
   {
     console.log(elem);
   }


   // setTimeout


console.log("Welcome to Programiz!");
setTimeout(function cb() {
 console.log("hey bro");
}, 5000);


console.log("Welcome to Programiz!");
setTimeout(()=>{console.log("hey bro")}, 6000);


// 1. console.log("B" - "B");
//    This expression subtracts the string "B" from the string "B". Since the subtraction operator is not defined for strings, JavaScript tries to convert them to numbers. However, both "B" strings cannot be converted to valid numbers, resulting in `NaN` (Not a Number).

// 2. console.log("B" + "B");
//    This expression uses the plus operator to concatenate the string "B" with the string "B". Since both operands are strings, JavaScript performs string concatenation. The result is the string "BB" because the two "B" strings are concatenated together.

// 3. console.log("2" - 2);
//    Here, the string "2" is subtracted from the number 2. JavaScript automatically converts the string "2" to the number 2 and performs the subtraction. The result is 0 because 2 minus 2 equals 0.

// 4. console.log("2" - "2");
//    This expression subtracts the string "2" from the string "2". Both operands are strings, but they represent valid numbers. JavaScript converts both strings to numbers and performs the subtraction. Again, the result is 0 because 2 minus 2 equals 0.

// 5. console.log("2" + "2");
//    Similar to the previous explanation, this expression uses the plus operator for string concatenation. The result is the string "22" because both "2" strings are concatenated together.