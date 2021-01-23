/** 
 * Objective

In this challenge, we learn about iterating over objects. Check the attached tutorial for more details.

Task

Complete the function in the editor. It has one parameter: an array, , of objects. Each object in the array has two integer properties denoted by  and . The function must return a count of all such objects  in array  that satisfy .

Input Format

The first line contains an integer denoting .
Each of the  subsequent lines contains two space-separated integers describing the values of  and .

Constraints

Output Format

Return a count of the total number of objects  such that . Locked stub code in the editor prints the returned value to STDOUT.
 */


function getCount(objects) {
  let myArrayOfObjects  = objects;
  let counter= 0; 
  for(let i=0; i<myArrayOfObjects.length; i++ ){
    if(myArrayOfObjects[i].x == myArrayOfObjects[i].y){
      counter++;
    }
  }
  return counter; 
}