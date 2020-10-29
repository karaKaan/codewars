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