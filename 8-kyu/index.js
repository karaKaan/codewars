// L1: Set Alarm
function setAlarm(employed, vacation){
    if(employed){
        if(vacation){return false} 
      else {return true}
    } else {return false}
  }

// Opposite number  
function opposite(number) {
  return number * -1
}

// N-th Power
function index(array, n){
  return (typeof(array[n]) != 'number' ? -1 : array[n]**n)}

// Returning Strings
function greet(name){
  
  return `Hello, ${name} how are you doing today?`
}

// Is he gonna survive?
function hero(bullets, dragons){
  return (bullets >= dragons*2)
  }

// Grasshopper - If/else syntax debug
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else  {
    return true
  }
}

// Get the mean of an array
function getAverage(marks){
  let sumUpMarks = 0
  for(row in marks){
    sumUpMarks += marks[row]
  }

  return Math.floor(sumUpMarks / marks.length)
}

// Even or Odd
function even_or_odd(number) {
  return number % 2 ? ('Odd') : ('Even')
}

//Can we divide it?
function isDivideBy(number, a, b) {
  return ((number%a || number %b) ? (false) : (true))
}