# exco-mongodb [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/taoyuan/exco-mongodb.svg)](https://greenkeeper.io/)

> A converter that convert mathjs expressions to mongodb arithmetic expressions

## Installation

```sh
$ npm install --save exco-mongodb
```

## Usage

```js
const converter = require('exco-mongodb');

converter.convert('a + b * c');
```
## License

MIT © [Yuan Tao](towyuan@outlook.com)


[npm-image]: https://badge.fury.io/js/exco-mongodb.svg
[npm-url]: https://npmjs.org/package/exco-mongodb
[travis-image]: https://travis-ci.org/taoyuan/exco-mongodb.svg?branch=master
[travis-url]: https://travis-ci.org/taoyuan/exco-mongodb
[daviddm-image]: https://david-dm.org/taoyuan/exco-mongodb.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/taoyuan/exco-mongodb
