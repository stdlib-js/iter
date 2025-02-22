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

# iterUniqueBy

> Create an [iterator][mdn-iterator-protocol] which returns unique values according to a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterUniqueBy = require( '@stdlib/iter/unique-by' );
```

#### iterUniqueBy( iterator, predicate\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which returns unique values according to a `predicate` function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( a, b ) {
    return ( a !== b );
}

var src = array2iterator( [ 2, 1, 1, 2, 4, 3, 4, 3 ] );

var it = iterUniqueBy( src, predicate );
// returns <Object>

var v = it.next().value;
// returns 2

v = it.next().value;
// returns 1

v = it.next().value;
// returns 4

v = it.next().value;
// returns 3

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

A `predicate` function is provided two arguments:

-   **a**: a previously identified unique value.
-   **b**: the value whose uniqueness is being determined.

To set the execution context of the `predicate` function, provide a `thisArg`.

<!-- eslint-disable object-curly-newline -->

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( a, b ) {
    this.count += 1;
    return ( a.v !== b.v );
}

var values = [
    { 'v': 2 },
    { 'v': 1 },
    { 'v': 1 },
    { 'v': 2 },
    { 'v': 4 },
    { 'v': 3 },
    { 'v': 4 },
    { 'v': 3 }
];

var src = array2iterator( values );

var ctx = {
    'count': 0
};

var it = iterUniqueBy( src, predicate, ctx );
// returns <Object>

var v = it.next().value;
// returns { 'v': 2 }

v = it.next().value;
// returns { 'v': 1 }

v = it.next().value;
// returns { 'v': 4 }

v = it.next().value;
// returns { 'v': 3 }

var bool = it.next().done;
// returns true

bool = ( ctx.count > 0 );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A returned [iterator][mdn-iterator-protocol] internally buffers unique values and, thus, has `O(N)` memory requirements.
-   A `predicate` function is invoked for each iterated value against each value in an internal buffer consisting of previously identified unique values. Thus, as the number of unique values grows, so, too, does the number of `predicate` function invocations per iterated value.
-   An iterated value is considered "unique" if the `predicate` function returns truthy values for **all** comparisons of the iterated value with each value in the internal buffer.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/iter/discrete-uniform' );
var iterUniqueBy = require( '@stdlib/iter/unique-by' );

function predicate( a, b ) {
    return ( a !== b );
}

// Create a seeded iterator which can generate 1000 pseudorandom numbers:
var rand = discreteUniform( 1, 10, {
    'seed': 1234,
    'iter': 1000
});

// Create an iterator which returns unique values:
var it = iterUniqueBy( rand, predicate );

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

-   <span class="package-name">[`@stdlib/iter/unique`][@stdlib/iter/unique]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values.</span>
-   <span class="package-name">[`@stdlib/iter/unique-by-hash`][@stdlib/iter/unique-by-hash]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values according to a hash function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/unique]: https://github.com/stdlib-js/iter/tree/main/unique

[@stdlib/iter/unique-by-hash]: https://github.com/stdlib-js/iter/tree/main/unique-by-hash

<!-- </related-links> -->

</section>

<!-- /.links -->
