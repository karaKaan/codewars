//Get the Middle Character
function getMiddle(s){
  return (s.length % 2 ? (s[Math.floor(s.length/2)]) : (s[s.length/2 - 1] + s[s.length/2])) 
}

// Larger Product or Sum
function sumOrProduct(array, n) {
  let highestValue = [];
  let lowestValue = [];
  let sumValue = 0;
  let prodValue = 1;
  
  let arrayHigh = () => {
    array.sort(function(a,b){
      if(a < b){
        return 1
      } else if (a == b){
       return 0
      } else {
      return -1
      }
    })
    return array
  }
  arrayHigh()
  
  for(let i = 0; i < array.length; i++){
    if(i < n){
      sumValue += array[i]
    }
  }
  
  for(let i = array.length - 1; i>=0; i--){
    if(i >= array.length - n){
     prodValue *= array[i]
    }
  }


  if(sumValue > prodValue){
    return "sum"
  } else if (sumValue == prodValue){
    return "same"
  } else {
    return "product"
  }
}

//Number of People in the Bus
var number = function(busStops){
  let passenger = 0;
  
  for(let i = 0; i < busStops.length; i++){
  
    passenger += busStops[i][0] - busStops[i][1]
  
  }
    return passenger
  }

// Vowel Count
function getCount(str){
  let counter = 0
  for(let i = 0; i<= str.length; i++){
    if(str[i] == "a" || str[i] == "e" ||   str[i] == "i" || str[i] == "o" || str[i] == "u"){
      counter++
    }
  }
  
  return counter
}