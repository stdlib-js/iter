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

# iterShift

> Create an [iterator][mdn-iterator-protocol] which skips the first value of a provided [iterator][mdn-iterator-protocol].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterShift = require( '@stdlib/iter/shift' );
```

#### iterShift( iterator\[, clbk\[, thisArg]] )

Returns an [iterator][mdn-iterator-protocol] which skips the first value of a provided [`iterator`][mdn-iterator-protocol].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var it = iterShift( array2iterator( [ 1, 2, 3, 4 ] ) );
// returns <Object>

var v = it.next().value;
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

To invoke a callback upon skipping the first value of a provided [`iterator`][mdn-iterator-protocol], provide a `clbk` argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function onShift( v ) {
    console.log( v );
    // => 1
}

var it = iterShift( array2iterator( [ 1, 2, 3, 4 ] ), onShift );
// returns <Object>

var v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

The callback function is provided a single argument:

-   **v**: the skipped value.

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function onShift() {
    this.count += 1;
}

var ctx = {
    'count': 0
};

var it = iterShift( array2iterator( [ 1, 2, 3, 4 ] ), onShift, ctx );
// returns <Object>

var v = it.next().value;
// returns 2

v = it.next().value;
// returns 3

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true

bool = ( ctx.count === 1 );
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
var iterShift = require( '@stdlib/iter/shift' );

// Create a seeded iterator for generating pseudorandom numbers:
var rand = randu({
    'seed': 1234,
    'iter': 10
});

// Create an iterator which skips the first number:
var it = iterShift( rand );

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

-   <span class="package-name">[`@stdlib/iter/pop`][@stdlib/iter/pop]</span><span class="delimiter">: </span><span class="description">create an iterator which skips the last value of a provided iterator.</span>
-   <span class="package-name">[`@stdlib/iter/slice`][@stdlib/iter/slice]</span><span class="delimiter">: </span><span class="description">create an iterator which returns a subsequence of iterated values from a provided iterator.</span>
-   <span class="package-name">[`@stdlib/iter/unshift`][@stdlib/iter/unshift]</span><span class="delimiter">: </span><span class="description">create an iterator which prepends values to the beginning of a provided iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/pop]: https://github.com/stdlib-js/iter/tree/main/pop

[@stdlib/iter/slice]: https://github.com/stdlib-js/iter/tree/main/slice

[@stdlib/iter/unshift]: https://github.com/stdlib-js/iter/tree/main/unshift

<!-- </related-links> -->

</section>

<!-- /.links -->
