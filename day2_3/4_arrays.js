
function getSecondLargest(nums) {
  // Ordering Array  
  nums.sort(function(a, b) {
    return a - b;
  });

  console.log(nums);

  for(let i = nums.length; i>=0; i--){
    if(nums[i]>nums[i-1]){
      return nums[i-1];
    }
  }
}