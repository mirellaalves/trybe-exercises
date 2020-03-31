/* Teste se uma variável foi definida. */

const assert = require('assert');

const thereIs = '';

assert.notStrictEqual(typeof thereIs, 'undefined');
assert.strictEqual(typeof thereIs, 'string');
