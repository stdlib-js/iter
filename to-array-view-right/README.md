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

# iterator2arrayviewRight

> Fill an array-like object view from right to left with values returned from an iterator.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterator2arrayviewRight = require( '@stdlib/iter/to-array-view-right' );
```

#### iterator2arrayviewRight( iterator, dest\[, begin\[, end]]\[, mapFcn\[, thisArg]] )

Fills an array-like `object` view from right to left with values returned from an `iterator`.

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var array2iterator = require( '@stdlib/array/to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ) );
// returns <Uint8Array>[ 0, 0, 0, 0, 0, 0, 4, 3, 2, 1 ]
```

The `begin` and `end` arguments define the starting (inclusive) and ending (non-inclusive) indices of the array view. By default, the function begins filling from the last element of a provided array-like `object` (i.e., from the "end"). To specify an alternative view end, provide an `end` argument (zero-based and non-inclusive).

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var array2iterator = require( '@stdlib/array/to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), 0, 4 );
// returns <Uint8Array>[ 4, 3, 2, 1, 0, 0, 0, 0, 0, 0 ]
```

If `end` is less than `0`, the last view element is resolved relative to the last element of the provided array-like `object`. For example, the following achieves the same behavior as the previous example

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var array2iterator = require( '@stdlib/array/to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), 0, -6 );
// returns <Uint8Array>[ 4, 3, 2, 1, 0, 0, 0, 0, 0, 0 ]
```

By default, the function fills through the first element of the provided array-like `object`. To specify an alternative view beginning, provide a `begin` argument (zero-based and inclusive).

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var array2iterator = require( '@stdlib/array/to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), 3 );
// returns <Uint8Array>[ 0, 0, 0, 7, 6, 5, 4, 3, 2, 1 ]
```

If `begin` is less than `0`, the first view element index is resolved relative to the last element of the provided array-like `object`. For example, the following achieves the same behavior as the previous example

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var array2iterator = require( '@stdlib/array/to-iterator' );

var iter = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 10 ), -7 );
// returns <Uint8Array>[ 0, 0, 0, 7, 6, 5, 4, 3, 2, 1 ]
```

To invoke a function for each iterated value, provide a callback function.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v ) {
    return v * 10.0;
}

var iter = array2iterator( [ 1, 2, 3, 4 ] );

var arr = iterator2arrayviewRight( iter, new Float64Array( 4 ), fcn );
// returns <Float64Array>[ 40.0, 30.0, 20.0, 10.0 ]
```

The invoked function is provided three arguments:

-   **value**: iterated value.
-   **index**: destination index (zero-based).
-   **n**: iteration index (zero-based).

```javascript
var Uint8Array = require( '@stdlib/array/uint8' );
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v, i, n ) {
    return v * (n+1);
}

var iter = array2iterator( [ 1, 2, 3, 4 ] );

var arr = iterator2arrayviewRight( iter, new Uint8Array( 4 ), fcn );
// returns <Uint8Array>[ 16, 9, 4, 1 ]
```

To set the callback function execution context, provide a `thisArg`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/iter/randu' );

function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var arr = iterator2arrayviewRight( randu(), new Float64Array( 10 ), fcn, ctx );
// returns <Float64Array>

var count = ctx.count;
// returns 10
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Iteration stops when an output array view is full **or** an iterator finishes; whichever comes first.
-   The function supports output array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/complex64`][@stdlib/array/complex64]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var randu = require( '@stdlib/random/iter/randu' );
var iterator2arrayviewRight = require( '@stdlib/iter/to-array-view-right' );

function scale( v, i, n ) {
    return v * (n+1) * 10.0;
}

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var it = randu();

// Fill an array view with scaled iterator values:
var arr = iterator2arrayviewRight( it, new Float64Array( 100 ), 40, 60, scale );

var i;
for ( i = 0; i < arr.length; i++ ) {
    console.log( arr[ i ] );
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

-   <span class="package-name">[`@stdlib/array/from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="package-name">[`@stdlib/array/to-view-iterator-right`][@stdlib/array/to-view-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object view, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/iter/to-array-view`][@stdlib/iter/to-array-view]</span><span class="delimiter">: </span><span class="description">fill an array-like object view with values returned from an iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array-from-iterator

[@stdlib/array/to-view-iterator-right]: https://github.com/stdlib-js/array-to-view-iterator-right

[@stdlib/iter/to-array-view]: https://github.com/stdlib-js/iter/tree/main/to-array-view

<!-- </related-links> -->

</section>

<!-- /.links -->
