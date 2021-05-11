# Entities to Unicode

Encode HTML Entities to Unicode characters

#### API

```js
// API

export default function entitiesToUnicode(input: string): string;
```

### Usage

This package was inspired from [Handlbars.Utils.escapeExpression][inspiration], but instead of converting entities to non-human friendly characters, for example from `&` to `&amp;`, it converts them to their closest unicode characters.

This is helpful when sending emails with both cleartext and HTML versions, as you can re-use your variables across both.

NOTE: Do not encode URLs with unicode, they will break.

#### License

This project is licensed under the terms of MIT License. See the License file for more info.

[inspiration]: https://github.com/handlebars-lang/handlebars.js/blob/6790c080c641ef2b44e663800e1794fae180977a/lib/handlebars/utils.js#L70
