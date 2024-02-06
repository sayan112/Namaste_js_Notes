// async function getData(){
//     return "hey bro";
// } 


// // async function always return promise 


// const data=getData();
// data.then((res)=>{
//     console.log(res);
// })




// example with own  promise 

// const p = new Promise((resolve,reject)=>{
//     resolve("hey data is here bro , amount is 1000");

// })



// async function getData() {

//      return p;
// }

// getData().then((res)=>{console.log(res);})




// async with await 


// const p = new Promise((resolve,reject)=>{
//     resolve("hey data is here bro , amount is 1000");

// })



// async function getData() {

//    const data =  await p;
//     console.log(data);
// }

// getData();




// async function with set timeout




// const p = new Promise((resolve,reject)=>{

//     setTimeout(()=>{    resolve("hey data is here bro , amount is 1000");},4000);
// })



// async function getData() {

//    const data =  await p;
//     console.log(data);
//      console.log("hey buddy ");
// }

// getData();


// fetching data from api 


import fetch from "node-fetch";
const APIURL = "https://api.github.com/users/sayan112";

async function getData() {
  try {
    const response = await fetch(APIURL);
    const data = await response.json();
    console.log(data);
    console.log("hey buddy");
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
