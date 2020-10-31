[ L1: Set Alarm](https://www.codewars.com/kata/568dcc3c7f12767a62000038)
````js
function setAlarm(employed, vacation){
    if(employed){
        if(vacation){return false} 
      else {return true}
    } else {return false}
  }

  ````

[Opposite number](https://www.codewars.com/kata/56dec885c54a926dcd001095)
````js
function opposite(number) {
  return number * -1
}
````

[N-th Power](https://www.codewars.com/kata/57d814e4950d8489720008db)
````js
function index(array, n){
  return (typeof(array[n]) != 'number' ? -1 : array[n]**n)}
````

[Returning Strings](https://www.codewars.com/kata/55a70521798b14d4750000a4)
````js
function greet(name){
  
  return `Hello, ${name} how are you doing today?`
}
````

[Is he gonna survive?](https://www.codewars.com/kata/59ca8246d751df55cc00014c)
````js
function hero(bullets, dragons){
return (bullets >= dragons*2)
}
````

[Grasshopper - If/else syntax debug](https://www.codewars.com/kata/57089707fe2d01529f00024a)
````js
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else  {
    return true
  }
}
````

[Get the mean of an array](https://www.codewars.com/kata/563e320cee5dddcf77000158)
````js
function getAverage(marks){
  let sumUpMarks = 0
  for(row in marks){
    sumUpMarks += marks[row]
  }

  return Math.floor(sumUpMarks / marks.length)
}
````

[Even or Odd](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)
````js
function even_or_odd(number) {
  return number % 2 ? ('Odd') : ('Even')
}
````

[Can we divide it?](https://www.codewars.com/kata/5a2b703dc5e2845c0900005a)
````js
function isDivideBy(number, a, b) {
  return ((number%a || number %b) ? (false) : (true))
}
````
