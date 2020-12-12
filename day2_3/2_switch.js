/* -------------------------------------------------------------------------- */
/*                            Conditional Statements                          */
/* -------------------------------------------------------------------------- */

function getLetter(s) {
  let letter;
  let firstLetter = s[0];
  let setNumber;
  // Write your code here  
  let setOne = ['a','e','i','o','u'];
  let setTwo = ['b','c','d','f','g'];
  let setThree = ['h','j','k','l','m'];
  let setFour = ['n','p','r','s','t','v','w','x','y','z'];
  let allSets = [setOne,setTwo, setThree, setFour];
  
  for(let i = 0; i<allSets.length; i++){
    if(containLetter(firstLetter,allSets[i])){
      setNumber = i;
    }
  }

  switch(setNumber){
    case 0:
      letter='A';
      return letter;
      break;
    case 1:
      letter='B';
      return letter;
      break;
    case 2:
      letter='C';
      return letter;
      break;
    case 3:
      letter='D';
      return letter;
      break;
  }  
}

function containLetter ( letter, set) {
  if(!set.includes(letter)){
    return false; 
  }
  return true; 
}
console.log(getLetter("wilson"));