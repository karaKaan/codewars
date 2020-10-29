[Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)
````js
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
````

[Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
````js
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
````

[Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)
````js
function duplicateCount(text){
  let textA = text.toLowerCase().split('')
  let newA =  []
  let counter = 0;

  let sorter = () => {
    textA.sort(function(a, b){
      if(a < b) {
        return -1
      } else if( a == b){
        return 0
      } else {
        return 1
      }
    })
  } 
  sorter()
  for(let i = 0; i<textA.length; i++){
    if(textA[i] == textA[i + 1]){
      newA.push(textA[i])
    }
  }
  for(let i = 0; i<textA.length; i++){
    if(newA[i] != newA[i + 1]){
      counter++
    }
  }  
  return counter
  }

````