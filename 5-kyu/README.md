[Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)
````js
function pigIt(str){
  let strArr = str.split(' ')
  let newArr = []
  let specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  for(let row in strArr){
    if(!specialCharacters.test(strArr[row])){
      newArr.push(strArr[row].slice(1) + strArr[row][0] + 'ay')
    } else {
      newArr.push(strArr[row])
    }
  }
  return newArr.join(' ')
}
````