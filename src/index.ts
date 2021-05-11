const escape = {
  '&': '＆',
  '<': '＜',
  '>': '＞',
  '"': '＂',
  "'": '＇',
  '`': '｀',
  '=': '＝',
}

const badChars = /[&<>"'`=]/g
const possible = /[&<>"'`=]/

function escapeChar(chr: string) {
  return escape[chr]
}

export default function entitiesToUnicode(input: string): string {
  let string = input
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string == null) {
      return ''
    }
    if (!string) {
      return `${string}`
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = `${string}`
  }

  if (!possible.test(string)) {
    return string
  }
  return string.replace(badChars, escapeChar)
}
