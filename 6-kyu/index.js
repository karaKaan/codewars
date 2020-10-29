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


// Who likes it?

function likes(names) {
  
    if(names.length == 0){
      return 'no one likes this'
    } else if(names.length == 1){
      return `${names} likes this`
    } else if(names.length == 2){
      return `${names[0]} and ${names[1]} like this`
    } else if(names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  
  }