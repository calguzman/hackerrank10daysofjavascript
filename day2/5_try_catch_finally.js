
function reverseString(str) {
    try{
      
      var splitString = str.split(""); // var splitString = "hello".split("");
      // ["h", "e", "l", "l", "o"]
      var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
      // ["o", "l", "l", "e", "h"]
      var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
      // "olleh"
      console.log(joinArray)
      return joinArray; // "olleh"

    }catch(e){
      console.log("s.split is not a function");
      console.log(str);
    }
    finally{

    }
}

reverseString(1234);