# sift3

[![NPM version](https://badge.fury.io/js/sift3.png)](http://badge.fury.io/js/sift3)
[![Build Status](https://secure.travis-ci.org/ramitos/sift3.png)](http://travis-ci.org/ramitos/sift3)
[![Dependency Status](https://gemnasium.com/ramitos/sift3.png)](https://gemnasium.com/ramitos/sift3)
[![Coverage Status](https://coveralls.io/repos/ramitos/sift3/badge.png?branch=master)](https://coveralls.io/r/ramitos/sift3?branch=master)

based on [timoxley/sift](https://github.com/timoxley/sift)

## install

```bash
npm install [--save/--save-dev] sift3
```

```bash
component install ramitos/sift3
```

## api

```js
var sift3 = require('sift3')
sift3('same', 'same') //=> 0
sift3('', 'abcdef') //=> 6
sift3('program', 'programming') //=> 3
```

more examples in the tests

## license

MIT