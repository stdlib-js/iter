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

# iterSlice

> Create an [iterator][mdn-iterator-protocol] which returns a subsequence of iterated values from a provided [iterator][mdn-iterator-protocol].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterSlice = require( '@stdlib/iter/slice' );
```

#### iterSlice( iterator\[, begin\[, end]] )

Returns an [iterator][mdn-iterator-protocol] which returns a subsequence of iterated values from a provided [iterator][mdn-iterator-protocol].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterSlice( array2iterator( [ 1, 2, 3, 4 ] ) );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

By default, the returned [iterator][mdn-iterator-protocol] returns a provided [iterator's][mdn-iterator-protocol] first iterated value through an [iterator's][mdn-iterator-protocol] last iterated value. To specify an alternative start iteration index (zero-based and **inclusive**), provide a `begin` argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterSlice( array2iterator( [ 1, 2, 3, 4 ] ), 2 );
// returns <Object>

var v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

By default, the returned [iterator][mdn-iterator-protocol] continues iterating until it consumes all of a provided [iterator's][mdn-iterator-protocol] iterated values. To specify an end iteration index (zero-based and **non-inclusive**), provide an `end` argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterSlice( array2iterator( [ 1, 2, 3, 4 ] ), 1, 3 );
// returns <Object>

var v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

var bool = it.next().done;
// returns true
```

If `begin` is greater than or equal to `end`, the returned [iterator][mdn-iterator-protocol] does not return any iterated values.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterSlice( array2iterator( [ 1, 2, 3, 4 ] ), 3, 1 );
// returns <Object>

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
var randu = require( '@stdlib/random/iter/randu' );
var iterSlice = require( '@stdlib/iter/slice' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234
});

// Create an iterator which returns a subsequence of 10 generated numbers:
var it = iterSlice( rand, 10, 20 );

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

-   <span class="package-name">[`@stdlib/iter/first`][@stdlib/iter/first]</span><span class="delimiter">: </span><span class="description">return the first iterated value.</span>
-   <span class="package-name">[`@stdlib/iter/head`][@stdlib/iter/head]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the first `n` values of a provided iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/first]: https://github.com/stdlib-js/iter/tree/main/first

[@stdlib/iter/head]: https://github.com/stdlib-js/iter/tree/main/head

<!-- </related-links> -->

</section>

<!-- /.links -->
