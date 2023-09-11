// ***removeDuplicates***

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
 const removethedublicate = (arr) => {
   return [...new Set(arr)];
 };
 const newarr=[removethedublicate(arr)];
  
  
//  console.log(newarr);


//  <script>
// 	var arr = ["apple", "mango",
// 		"apple", "orange", "mango", "mango"];

// 	function removeDuplicates(arr) {
// 		var unique = [];
// 		for(i=0; i < arr.length; i++){
// 			if(unique.indexOf(arr[i]) === -1) {
// 				unique.push(arr[i]);
// 			}
// 		}
// 		return unique;
// 	}

// 	console.log(removeDuplicates(arr));
// </script>


// ***count the repeating elem***

 const arr =['a','a','c','c'];
  let countarr={};
   for(const elem of arr)
   {
      if(!countarr[elem])
      {
countarr[elem]=1;

      }
      else{
        countarr[elem]++;
      }
   }
console.log(countarr);




// ***Example of clouser***
  function a()
  {
     let need =10;
      function b ()
      {
        //  let need =100;
          console.log(need);

      }
       b();
  }
   a();



  // *** Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon , Print the first company, middle and last company , Print the number of companies in the array *** 



   const techcompanies=["Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
    for(let elem of techcompanies){
      elem.toLowerCase();
       console.log(elem);
    }
     console.log(techcompanies[0]); // starting elem 
     console.log(techcompanies[techcompanies.length/2]); // middle elem
       console.log(techcompanies[techcompanies.length-1]);// end elem 

        console.log(techcompanies.length);// array legth

        // Change each company name to uppercase one by one and print them out
const uppercaseOfTechcompanies =[];
          
     for(let elem of techcompanies)
     {
      uppercaseOfTechcompanies.push(elem.toUpperCase());
     }
      
       for (let elem of uppercaseOfTechcompanies) {
     console.log(elem);
       }
      
// change the array to lower case without creating a new array

 const techCompanies = [
   "Google",
   "Microsoft",
   "Apple",
   "IBM",
   "Oracle",
   "Amazon",
 ];

  for(let i=0;i<techCompanies.length;i++)
{
techCompanies[i]=techCompanies[i].toLowerCase();
}

for(let elem of techCompanies)
{
  console.log(elem);

  // google
//   microsoft;
//   apple;
//   ibm;
//   oracle;
//   amazon;
}



//Remove the last IT company from the array

 techCompanies.pop();
 console.log(techCompanies);








//  reverse the order of an array.

 const numbers=[1,2,3,4,5,6,7,8,9,10];
  numbers.reverse();
   console.log(numbers);


   // sort the array 
 const numbers1 = [1, 5, 0, 14, 5, 6, 7, 8, 9, 10];
 numbers.sort(); // its done by checking only the first digit of numbers 
     numbers1.sort((a,b)=>a-b);
     
      console.log(numbers1);

/// remove all numbers from numbers array
 numbers1.splice();
  console.log(numbers1);
   console.log(numbers);



   // exersise 1 : 
//    The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
 ages.sort((a,b)=>{a-b});
  console.log("the sorted age is "+ages);
 let mid =ages[ages.length/2];
 console.log("the middle elem is "+ mid);
  let sum =0;
  for(let elem of ages)
  {
sum+=elem;
  }
   let avg = sum/ages.length;
    console.log("avg is "+ avg);

     let min = ages[0];
      console.log("min is "+min);
      let max=ages[ages.length-1];
         console.log("max is " + max);
     let range=(max-min);
      console.log("ranges is "+range);




   // exercise 2    

   // In the following shopping cart add, remove, edit items

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
 if (shoppingCart.indexOf("Meat") != 0) {
   shoppingCart.unshift("Meat");
 }

 console.log(shoppingCart);


  if (shoppingCart.indexOf("Sugar") != shoppingCart.length-1) {
    shoppingCart.push("Sugar");
  }
   console.log(shoppingCart);


   // now I have to remove honey 
   if(shoppingCart.includes("Honey")) {
      let idx = shoppingCart.indexOf("Honey");
       shoppingCart.splice(idx,1);
   }
      console.log(shoppingCart);
