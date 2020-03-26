/* Utilize assert.ok() para testar uma condição */

const assert = require('assert');

function change(param) {
  return !param;
}

assert.ok(change(false), true, 'test1');
