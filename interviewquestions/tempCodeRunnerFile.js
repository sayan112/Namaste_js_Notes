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
