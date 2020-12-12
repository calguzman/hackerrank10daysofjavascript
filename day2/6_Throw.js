// My Solution. 

function isPositive(a) {
  try {
    if (a > 0) {
      return "YES";
  }
  else {
      if (a == 0) {
        throw new Error("Zero Error");
      }
      else {
          throw new Error("Negative Error");
      }
  }
  } catch (error) {
    console.log(error.message);
  }
}

// For Tester Solution 

function isPositive(a) {
    
  if (a == 0) {
      throw new Error("Zero Error");
  }
  else if (a < 0) {
      throw new Error("Negative Error");
  }
  else { // a > 0
      return "YES";
  }
}
