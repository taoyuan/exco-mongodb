"use strict";

const converter = require('..');

const converted = converter.convert('date + 3*24*60*60000');

console.log(converted);
