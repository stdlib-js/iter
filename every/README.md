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

# iterEvery

> Test whether all [iterated][mdn-iterator-protocol] values are truthy.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterEvery = require( '@stdlib/iter/every' );
```

#### iterEvery( iterator )

Tests whether all [iterated][mdn-iterator-protocol] values are truthy.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 1, 1, 1, 1, 0 ] );

var bool = iterEvery( arr );
// returns false
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any iterated values, the function returns `true`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var bool = iterEvery( array2iterator( [] ) );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var iterMap = require( '@stdlib/iter/map' );
var iterEvery = require( '@stdlib/iter/every' );

function threshold( r ) {
    return ( r <= 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Create an iterator which applies a threshold to generated numbers:
var miter = iterMap( riter, threshold );

// Determine if all values are "truthy":
var bool = iterEvery( miter );
// returns <boolean>

console.log( bool );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
