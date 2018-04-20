function breakOut(array, changeValue, stopValue){
  array.forEach((element, index, array) => {
    if(element == stopValue)
      {break}
    else
      element = changeValue
  })
  return array
}