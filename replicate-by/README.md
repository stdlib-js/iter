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

# iterReplicateBy

> Create an [iterator][mdn-iterator-protocol] which replicates each iterated value according to a provided function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterReplicateBy = require( '@stdlib/iter/replicate-by' );
```

#### iterReplicateBy( iterator, fcn\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which replicates each iterated value according to a provided function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v, i ) {
    return i + 1;
}

var it = iterReplicateBy( array2iterator( [ 1, 2, 3, 4 ] ), fcn );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 3

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The callback function is provided three arguments:

-   **value**: iterated value.
-   **index**: source iteration index (zero-based).
-   **n**: iteration index (zero-based).

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function fcn( v, i ) {
    this.count += 1;
    return i + 1;
}

var ctx = {
    'count': 0
};

var it = iterReplicateBy( array2iterator( [ 1, 2, 3, 4 ] ), fcn, ctx );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

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

-   A callback function is invoked **once** per iterated value of the provided [`iterator`][mdn-iterator-protocol].
-   A callback function **must** return an **integer** value. If the return value is less than or equal to `0`, the returned [iterator][mdn-iterator-protocol] skips an iterated value and invokes the callback for the next iterated value of the provided [`iterator`][mdn-iterator-protocol].
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var iterReplicateBy = require( '@stdlib/iter/replicate-by' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which replicates each generated number a random number of times:
var it = iterReplicateBy( rand, discreteUniform.factory( 1, 10 ) );

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

-   <span class="package-name">[`@stdlib/iter/replicate`][@stdlib/iter/replicate]</span><span class="delimiter">: </span><span class="description">create an iterator which replicates each iterated value a specified number of times.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/replicate]: https://github.com/stdlib-js/iter/tree/main/replicate

<!-- </related-links> -->

</section>

<!-- /.links -->
