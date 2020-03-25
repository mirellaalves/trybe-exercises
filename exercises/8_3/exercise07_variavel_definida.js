/* Teste se uma variável foi definida. */

const assert = require('assert');

const thereIs = '';

function definedVariable(thereIs) {
    if (thereIs !== undefined) {
        return true;
    }
    return false;
}

assert.ok(definedVariable('', false, 'test1'));
assert.ok(definedVariable('x', true, 'test2'));
assert.ok(definedVariable(0, true, 'test3'));
assert.ok(definedVariable(null, false, 'test4'));
/*assert.ok(definedVariable(undefined, true, 'test5'));*/
