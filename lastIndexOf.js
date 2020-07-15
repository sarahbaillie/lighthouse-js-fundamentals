function lastIndexOf(array, num) {
  for (var i = array.length - 1; i >= 0; i --) {
    if (array[i] === num) {
      return i;
    } 

  }
  if (array[i] !== num) {
    return -1 } 
}
