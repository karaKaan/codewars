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