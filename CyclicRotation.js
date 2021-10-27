//version 01
//Create array
var rotArray=[3, 8, 9, 7, 6];
//Create a variable to determine the number of times the array should rotate
var rotNum=3;
//Create a loop that will rotate the array x amount of times
for (let index = 0; index < rotNum; index++) 
{
    //debugger;
  //Get last element of the array and move it to the 1st element's position
 var lastElement=rotArray[rotArray.length-1];
 rotArray.pop();
 rotArray.unshift(lastElement);
  console.log(rotArray);
}

//Version 02
function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (let index = 0; index < K; index++) 
{
    //debugger;
  //Get last element of the array and move it to the 1st element's position
 var lastElement=A[A.length-1];
 A.pop();
 A.unshift(lastElement);

}
return A;
}