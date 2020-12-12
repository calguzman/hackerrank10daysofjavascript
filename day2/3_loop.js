function vowelsAndConsonants(s) {
  let vowels = ['a','e','i','o','u'];
    let consonants = [];
    for( let i = 0; i<s.length; i++ ){
        if(vowels.includes(s[i])){
            console.log(s[i]);
        }else{
          consonants.push(s[i]);
        }
        
    }
    for(let j= 0; j<consonants.length; j++){
      console.log(consonants[j]);
    }
  
    
  }