/** @license Apache-2.0 */

/* eslint-disable id-length */

'use strict';

/**
* The maximum base 10 exponent for a subnormal half-precision floating-point number.
*
* @module @stdlib/constants-float16-max-base10-exponent-subnormal
* @type {integer32}
*
* @example
* var FLOAT16_MAX_BASE10_EXPONENT_SUBNORMAL = require( '@stdlib/constants-float16-max-base10-exponent-subnormal' );
* // returns -5
*/


// MAIN //

/**
* The maximum base 10 exponent for a subnormal half-precision floating-point number.
*
* ```text
* 2^-14 ≈ 6.10352e-5 => -5
* ```
*
* @constant
* @type {integer32}
* @default -5
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/
var FLOAT16_MAX_BASE10_EXPONENT_SUBNORMAL = -5|0; // asm type annotation


// EXPORTS //

module.exports = FLOAT16_MAX_BASE10_EXPONENT_SUBNORMAL;
