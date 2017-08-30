export function makeRandomId(intLength, strCharSet)
{
  strCharSet = strCharSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  intLength = parseInt(intLength)
  if (typeof intLength !== 'number' || isNaN(intLength))
  {
    intLength = 60
  }
  let strTextRandom = ''
  for (let i = 0; i < intLength; i++)
  {
    let intTempPosition = Math.floor(Math.random() * strCharSet.length)
    strTextRandom += strCharSet.substring(intTempPosition, intTempPosition + 1)
  }
  return strTextRandom
}
