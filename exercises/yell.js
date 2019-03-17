'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(StringToReturn){
    return StringToReturn.toUpperCase();
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell('je suis un poulet'), 'JE SUIS UN POULET')
assert.deepStrictEqual(yell('vive la biere'), 'VIVE LA BIERE')
// End of tests */
