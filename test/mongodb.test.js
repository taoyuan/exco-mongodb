'use strict';

const assert = require('chai').assert;
const converter = require('..');

describe('mongodb', function () {

  it('should convert arithmetic add', function () {
    assert.deepEqual(converter.convert('a + b'), { '$add': [ '$a', '$b' ] });
  });

  it('should convert variable with dot', function () {
    assert.deepEqual(converter.convert('a.b.c + x.y.z'), { '$add': [ '$a.b.c', '$x.y.z' ] });
  });

  it('should convert arithmetic abs', function () {
    assert.deepEqual(converter.convert('abs(a)'), { '$abs': '$a' });
  });

  it('should convert arithmetic subtract', function () {
    assert.deepEqual(converter.convert('a - b'), { '$subtract': [ '$a', '$b' ] });
  });

  it('should calculate literal arithmetic', function () {
    assert.deepEqual(converter.convert('date + 3*24*60*60000'), { '$add': [ '$date', 259200000 ] });
  });

  it('should map name with namemapper', function () {
    assert.deepEqual(converter.convert('a + b', {
      namemapper: (name => 'data.' + name)
    }), { '$add': [ '$data.a', '$data.b' ] });
  });

});

