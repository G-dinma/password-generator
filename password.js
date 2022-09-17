let randomPasswordOne = document.getElementById("password-one")
let randomPasswordTwo = document.getElementById("password-two")

function generate() {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

  let passwordLength = 12;
  let passwordOne = ""
  let passwordTwo = ""

  for (let i = 0; i < passwordLength; i++) {
    let inputOne = Math.floor(Math.random() * characters.length)
    
    passwordOne += characters.toString().substring(inputOne, inputOne + 1);
    randomPasswordOne.textContent = characters[inputOne]

    let inputTwo = Math.floor(Math.random() * characters.length)
    
    passwordTwo += characters.toString().substring(inputTwo, inputTwo + 1);
    randomPasswordTwo.textContent = characters[inputTwo]

  }
}