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

# iterMapN

> Create an [iterator][mdn-iterator-protocol] which transforms iterated values from two or more [iterators][mdn-iterator-protocol] by applying the iterated values as arguments to a provided function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterMapN = require( '@stdlib/iter/mapn' );
```

#### iterMapN( iter0, ...iterator, fcn\[, thisArg] )

Returns an [iterator][mdn-iterator-protocol] which transforms iterated values from two or more [iterators][mdn-iterator-protocol] by applying the iterated values as arguments to a provided function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function transform( x, y ) {
    return x + y;
}

var it1 = array2iterator( [ 1.0, 2.0 ] );
var it2 = array2iterator( [ 3.0, 4.0 ] );

var it = iterMapN( it1, it2, transform );
// returns <Object>

var v = it.next().value;
// returns 4.0

v = it.next().value;
// returns 6.0

var bool = it.next().done;
// returns true
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The invoked `function` is provided `N+1` arguments, where `N` is the number of provided [iterators][mdn-iterator-protocol] and the last argument is the iteration index:

-   `...value`: iterated values.
-   `index`: iteration index (zero-based).

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function transform( x, y, i ) {
    return x + y + i;
}

var it1 = array2iterator( [ 1.0, 2.0 ] );
var it2 = array2iterator( [ 3.0, 4.0 ] );

var it = iterMapN( it1, it2, transform );
// returns <Object>

var v = it.next().value;
// returns 4.0

v = it.next().value;
// returns 7.0

var bool = it.next().done;
// returns true
```

To set the callback execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function transform( x, y ) {
    this.count += 1;
    return x + y;
}

var it1 = array2iterator( [ 1.0, 2.0 ] );
var it2 = array2iterator( [ 3.0, 4.0 ] );

var ctx = {
    'count': 0
};
var it = iterMapN( it1, it2, transform, ctx );
// returns <Object>

var v = it.next().value;
// returns 4.0

v = it.next().value;
// returns 6.0

var bool = it.next().done;
// returns true

var count = ctx.count;
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** provided [iterators][mdn-iterator-protocol] are iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterSineWave = require( '@stdlib/simulate/iter/sine-wave' );
var iterMapN = require( '@stdlib/iter/mapn' );

function add( x, y ) {
    return x + y;
}

// Create an iterator which generates a sine wave:
var sine1 = iterSineWave({
    'period': 50,
    'offset': 0,
    'iter': 100
});

// Create another iterator which generates a higher frequency sine wave:
var sine2 = iterSineWave({
    'period': 10,
    'offset': 0,
    'iter': 100
});

// Create an iterator which adds the two waveforms:
var it = iterMapN( sine1, sine2, add );

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

-   <span class="package-name">[`@stdlib/iter/map`][@stdlib/iter/map]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/map]: https://github.com/stdlib-js/iter/tree/main/map

<!-- </related-links> -->

</section>

<!-- /.links -->
