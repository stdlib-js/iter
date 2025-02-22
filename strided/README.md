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

# iterStrided

> Create an [iterator][mdn-iterator-protocol] which steps by a specified amount.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterStrided = require( '@stdlib/iter/strided' );
```

#### iterStrided( iterator, stride\[, offset\[, eager]] )

Returns an [iterator][mdn-iterator-protocol] which steps by a specified amount.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStrided( arr, 2 );
// returns <Object>

var r = it.next().value;
// returns 1

r = it.next().value;
// returns 3

r = it.next().value;
// returns 5

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

To skip the first `N` values of a provided [`iterator`][mdn-iterator-protocol], provide an `offset` argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStrided( arr, 2, 1 );
// returns <Object>

var r = it.next().value;
// returns 2

r = it.next().value;
// returns 4

r = it.next().value;
// returns 6

// ...
```

By default, the returned [iterator][mdn-iterator-protocol] defers consuming the first `N` input [`iterator`][mdn-iterator-protocol] values until the first value of the returned [iterator][mdn-iterator-protocol] is consumed. To eagerly advance the input [`iterator`][mdn-iterator-protocol], set the `eager` argument to `true`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1, 2, 3, 4, 5, 6, 7, 8 ] );
var it = iterStrided( arr, 1, 4, true );
// returns <Object>

var r = it.next().value;
// returns 5

r = it.next().value;
// returns 6

r = it.next().value;
// returns 7

// ...
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
var iterStrided = require( '@stdlib/iter/strided' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which returns every other random number:
var it = iterStrided( rand, 2 );

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

-   <span class="package-name">[`@stdlib/iter/advance`][@stdlib/iter/advance]</span><span class="delimiter">: </span><span class="description">advance an iterator.</span>
-   <span class="package-name">[`@stdlib/iter/nth`][@stdlib/iter/nth]</span><span class="delimiter">: </span><span class="description">return the nth iterated value.</span>
-   <span class="package-name">[`@stdlib/iter/strided-by`][@stdlib/iter/strided-by]</span><span class="delimiter">: </span><span class="description">create an iterator which steps according to a provided callback function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/advance]: https://github.com/stdlib-js/iter/tree/main/advance

[@stdlib/iter/nth]: https://github.com/stdlib-js/iter/tree/main/nth

[@stdlib/iter/strided-by]: https://github.com/stdlib-js/iter/tree/main/strided-by

<!-- </related-links> -->

</section>

<!-- /.links -->
