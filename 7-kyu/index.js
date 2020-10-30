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