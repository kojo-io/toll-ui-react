export const formatString = (maskFormat: string, stringToFormat: string) => {
  let result = ''
  let strIndex = 0

  for (let i = 0; i < maskFormat.length; i++) {
    const maskChar = maskFormat[i]
    if (maskChar === 'D') {
      if (
        stringToFormat[strIndex] &&
        !isNaN(parseInt(stringToFormat[strIndex]))
      ) {
        result += stringToFormat[strIndex]
        strIndex++
      } else {
        result += '_'
        strIndex++
      }
    } else if (maskChar === 'A') {
      if (
        stringToFormat[strIndex] &&
        /^[a-zA-Z]+$/.test(stringToFormat[strIndex])
      ) {
        result += stringToFormat[strIndex]
        strIndex++
      } else {
        result += '_'
        strIndex++
      }
    } else {
      result += maskChar
    }
  }
  return result
}

export const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/g
