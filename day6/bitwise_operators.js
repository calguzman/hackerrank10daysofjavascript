/** Objective

Today, we're practicing bitwise operations. Check the attached tutorial for more details.

Task

We define  to be a sequence of distinct sequential integers from  to ; in other words, . We want to know the maximum bitwise AND value of any two integers,  and  (where ), in sequence  that is also less than a given integer, .

Complete the function in the editor so that given  and , it returns the maximum .

Note: The  symbol represents the bitwise AND operator.

Input Format

The first line contains an integer, , denoting the number of function calls.
Each of the  subsequent lines defines a dataset for a function call in the form of two space-separated integers describing the respective values of  and .

Constraints

Output Format

Return the maximum possible value of  for any  in sequence . */

var getMaxLessThanK = function(n, k){
  let max_value = 0;
  for ( var i = 1 ;i < n ;i++){
      for (var j = i+1 ; j < n+1; j++){
          if ( Number(i & j) < k){  // This line
              if(Number(i & j) > max_value){ // And this line
                  max_value = i & j;
              }
          }
      }
  }
  return max_value;
}
