[Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)
`````js
function createPhoneNumber(numbers){
  let numberFirst = ""
  let numberSec = ""
  let numberThird = ""
  for(let row in numbers){
    if(row <= 2){
      numberFirst += numbers[row]
    } else if(row > 2 && row <= 5){
      numberSec += numbers[row]
    } else {
      numberThird += numbers[row]
    }
  }
  
  
  return `(${numberFirst}) ${numberSec}-${numberThird}` 
}````