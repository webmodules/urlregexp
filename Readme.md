# URLRegExp

This module provides a regular expression to match web URLs in a body of plain text.

## Introduction

URLRegExp is inspired by [John Gruber's work](http://daringfireball.net/2010/07/improved_regex_for_matching_urls) on a liberal URL matching RegExp, but with a stronger focus on comprehensiveness and correctness than conciseness. It also doesn't try to match non-web URLs, like mailto: and magnet:.

It will match bare domain names with or without paths (example.com, example.com/path) and full URLs starting with either http://, https:// or //.

The RegExp is compiled from a template file and [an automatically generated list of all the current top level domains](https://github.com/stephenmathieson/node-tlds). It will be updated as new TLDs are added by ICANN. XRegExp is used to provide full support for matching Unicode internationalized domain names.

## Features

* Matching of both full and bare URLs (with or without http://).
* Bare URL matching based on a list of all current TLDs. Will match foo.museum but not foo.jpeg. 
* Matching of Internationalized Domain Names, like:
  - ουτοπία.δπθ.gr
  - 日本.icom.museum
  - правительство.рф
  - 互联网中心.中国
* Matching of paths, query strings and fragment identifiers in bare URLs.
* Smart detection of quotes, parenthesis and punctuation. Will not match closing brackets at the end of an URL, unless an opening bracket is present earlier on the URL:
  - (en.wikipedia.org/wiki/Paris) - Will not match the final parenthesis.
  - en.wikipedia.org/wiki/Paris_(disambiguation) - Will match the final parenthesis.

## Usage

```javascript
// urlregexp is a normal JavaScript RegExp object, with the 'g' flag.
var urlregexp = require('urlregexp')

var matches = 'This is a sample text with a domain: google.com. Have a nice day.'.match(urlregexp);
```

## License

    The MIT License (MIT)
    
    Copyright (c) 2014 Automattic, Inc.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.