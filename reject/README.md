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

# iterReject

> Create an [iterator][mdn-iterator-protocol] which rejects the values of another [iterator][mdn-iterator-protocol] according to a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterReject = require( '@stdlib/iter/reject' );
```

#### iterReject( iterator, predicate\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which rejects the values of another [`iterator`][mdn-iterator-protocol] according to a `predicate` function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( v ) {
    return ( v > 2 );
}

var it = iterReject( array2iterator( [ 1, 3, 2, 4 ] ), predicate );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The `predicate` function is provided two arguments:

-   `value`: iterated value.
-   `index`: iteration index (zero-based).

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( v, i ) {
    return ( i >= 2 );
}

var it = iterReject( array2iterator( [ 3, 4, 1, 2 ] ), predicate );
// returns <Object>

var v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

To set the `predicate` function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( v ) {
    this.count += 1;
    return ( v > 10 );
}

var ctx = {
    'count': 0
};

var it = iterReject( array2iterator( [ 1, 2, 3, 4 ] ), predicate, ctx );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

var count = ctx.count;
// returns 3
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
var iterReject = require( '@stdlib/iter/reject' );

function predicate( v ) {
    return ( v > 0.5 );
}

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 20
});

// Create an iterator which filters the generated numbers:
var it = iterReject( rand, predicate );

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

-   <span class="package-name">[`@stdlib/iter/filter`][@stdlib/iter/filter]</span><span class="delimiter">: </span><span class="description">create an iterator which filters the values of another iterator according to a predicate function.</span>
-   <span class="package-name">[`@stdlib/iter/map`][@stdlib/iter/map]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/filter]: https://github.com/stdlib-js/iter/tree/main/filter

[@stdlib/iter/map]: https://github.com/stdlib-js/iter/tree/main/map

<!-- </related-links> -->

</section>

<!-- /.links -->
