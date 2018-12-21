// add solution here


const theBeatlesPlay = (arrayM, arrayI) => {
  var empty = []
  let emptyString = ''
  for (let i = 0; i < arrayM.length; i++) {
    emptyString = (arrayM[i] + " plays " + arrayI[i] + ". ")
    empty.push(emptyString)
  }
  return empty
}
