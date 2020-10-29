// Create Phone Number

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
  }