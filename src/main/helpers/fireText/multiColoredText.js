

export const multiColoredText = {

  getChars(text) {
    let words = text.split(' ').map((w, i, wrds) => {
      if (i === wrds.length - 1) {
        return [...w]
      } else
        return [...w, '/']
    })
    return [].concat(...words) // [].concat([['w'], ['o'], ['r'], ['d']]) -> how to type it?
  }

}