function rot15(str){//creating a function
let characters = str.split('');//splitting the array
return characters.map(function(letter){//creating a function(map)to loop through the letters
    letter = letter.charCodeAt();//coverting the letter to the ascii code
    if(letter >= 65 && letter <= 80) {//if the letters are greater,equal to 65 && less, equal to 77
        letter+= 15;//shifting the letter 15 places in the ascii code
        
    } else if(letter>= 81 && letter <= 90) {//else we need to count backwards
        letter-= 15;//we minus 15 places back in the ascii code
    }
      return String.fromCharCode(letter) //we are returning the string to the letter it self
    
    }).join('');//joining the string
}
console.log(rot15('RVS XR YQ'));//prints out code