<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# iterForEach

> Create an iterator which invokes a function for each iterated value before returning the iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterForEach = require( '@stdlib/iter/for-each' );
```

#### iterForEach( iterator, fcn\[, thisArg] )

Returns an iterator which invokes a `function` for each iterated value **before** returning the iterated value.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function assert( v ) {
    if ( v !== v ) {
        throw new Error( 'should not be NaN' );
    }
}

var it = iterForEach( array2iterator( [ 1, 2, 3, 4 ] ), assert );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns 3

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The invoked function is provided two arguments:

-   **value**: iterated value.
-   **index**: iteration index (zero-based).

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function assert( v, i ) {
    if ( i < 0 ) {
        throw new Error( 'unexpected Error' );
    }
}

var it = iterForEach( array2iterator( [ 1, 2, 3, 4 ] ), assert );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns 3

// ...
```

To set the execution context for `fcn`, provide a `thisArg`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function assert( v ) {
    this.count += 1;
    if ( v !== v ) {
        throw new Error( 'should not be NaN' );
    }
}

var ctx = {
    'count': 0
};

var it = iterForEach( array2iterator( [ 1, 2, 3, 4 ] ), assert, ctx );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 2

r = it.next().value;
// returns 3

var count = ctx.count;
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var iterForEach = require( '@stdlib/iter/for-each' );

function assert( v ) {
    if ( isnan( v ) ) {
        throw new Error( 'should not be NaN' );
    }
}

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which validates generated numbers:
var it = iterForEach( rand, assert );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
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

-   <span class="package-name">[`@stdlib/iter/map`][@stdlib/iter/map]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/iter/map]: https://github.com/stdlib-js/iter/tree/main/map

<!-- </related-links> -->

</section>

<!-- /.links -->
