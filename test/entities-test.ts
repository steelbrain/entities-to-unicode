import test from 'ava'
import entitiesToUnicode from '..'

test('HTML entities encoding', (t) => {
  t.snapshot(entitiesToUnicode('Hello <script a="b" >World</script> of "` escaping & testing'))
  t.snapshot(entitiesToUnicode("Escaping single's quotes"))
})
