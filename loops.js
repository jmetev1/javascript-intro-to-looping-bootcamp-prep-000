function forLoop(array) {
  for (let i=0; i<25; i++) {
    array.push(`I am ${i} strange loop.`)
  }
  return array
}
function whileLoop(i) {
  while (i>0) {
    console.log(--i)
  }
 return "done"
}
function maybeTrue() {
  return Math.random() >= 5
}
function doWhileLoop(array) {
  do {
    array.shift()
  }
  while (maybeTrue() && array.length>0)
  return array
}
