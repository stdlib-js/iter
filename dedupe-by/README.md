<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterDedupeBy

> Create an [iterator][mdn-iterator-protocol] which removes consecutive values that resolve to the same value according to a provided function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterDedupeBy = require( '@stdlib/iter/dedupe-by' );
```

#### iterDedupeBy( iterator, \[limit,] fcn )

Returns an [iterator][mdn-iterator-protocol] which removes consecutive values that resolve to the same value according to a provided function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v ) {
    return v;
}

var arr = array2iterator( [ 1, 1, 2, 3, 3, 3, 4, 4 ] );
var it = iterDedupeBy( arr, fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The callback function is provided five arguments:

-   **curr**: current source iterated value.
-   **sprev**: previous source iterated value.
-   **dprev**: previous downstream iterated value.
-   **index**: source iteration index (zero-based).
-   **acc**: previous resolved value.

The returned [iterator][mdn-iterator-protocol] removes **consecutive** values which resolve to the same value and does **not** return globally "unique" values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v ) {
    return v;
}

var arr = array2iterator( [ 1, 1, 2, 1, 1, 2 ] );
var it = iterDedupeBy( arr, fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

var bool = it.next().done;
// returns true
```

To specify the number of allowed consecutive duplicated values, provide a `limit` argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v ) {
    return v;
}

var arr = array2iterator( [ 1, 1, 2, 3, 3, 3, 3, 4, 4, 4 ] );
var it = iterDedupeBy( arr, 2, fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randi = require( '@stdlib/random/iter/discrete-uniform' );
var iterDedupe = require( '@stdlib/iter/dedupe' );
var iterDedupeBy = require( '@stdlib/iter/dedupe-by' );

function fcn( curr, sprev, dprev, i, acc ) {
    if ( curr < dprev ) {
        return 1;
    }
    if ( curr === dprev ) {
        return acc; // ensures that duplicate values are removed
    }
    // curr > dprev
    return -1;
}

// Create a seeded iterator for generating pseudorandom integers:
var rand = randi( 1, 10, {
    'seed': 1234,
    'iter': 100
});

// Create an iterator which removes consecutive duplicated values:
var deduped = iterDedupe( rand );

// Create an iterator which forces consecutive values to follow an alternating less than, greater than pattern:
var it = iterDedupeBy( deduped, fcn );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter/dedupe`][@stdlib/iter/dedupe]</span><span class="delimiter">: </span><span class="description">create an iterator which removes consecutive duplicated values.</span>
-   <span class="package-name">[`@stdlib/iter/unique`][@stdlib/iter/unique]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/dedupe]: https://github.com/stdlib-js/iter/tree/main/dedupe

[@stdlib/iter/unique]: https://github.com/stdlib-js/iter/tree/main/unique

<!-- </related-links> -->

</section>

<!-- /.links -->
