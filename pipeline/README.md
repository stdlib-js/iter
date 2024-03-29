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

# iterPipeline

> Create an [iterator][mdn-iterator-protocol] pipeline.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterPipeline = require( '@stdlib/iter/pipeline' );
```

#### iterPipeline( iterFcn0\[, ...iterFcn] )

Returns an [iterator][mdn-iterator-protocol] pipeline.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );

// Convert iterator functions to unary functions which accept an iterator:
var it1 = iterThunk( iterHead, 5 );
var it2 = iterThunk( iterSome, 3 );

// Create an iterator pipeline:
var p = iterPipeline( it1, it2 );

// Create a source iterator:
var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1 ] );

// Provide the source iterator to our iterator pipeline:
var bool = p( arr );
// returns true

// Create a new source iterator:
arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 0, 1, 1 ] );

// Run the pipeline for the new source iterator:
bool = p( arr );
// returns false
```

The function accepts [iterator][mdn-iterator-protocol] functions provided as separate arguments **or** as a single argument consisting of an array of [iterator][mdn-iterator-protocol] functions.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );

var it1 = iterThunk( iterHead, 5 );
var it2 = iterThunk( iterSome, 3 );

var p = iterPipeline( [ it1, it2 ] );

var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 0, 1, 1 ] );
var bool = p( arr );
// returns true

arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 0, 1, 1 ] );
bool = p( arr );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Within the context of an [iterator][mdn-iterator-protocol] pipeline (as defined by this function), an [iterator][mdn-iterator-protocol] function is defined as a **unary** function which accepts an [iterator][mdn-iterator-protocol] as its **only** argument.
-   Each [iterator][mdn-iterator-protocol] function, except the last [iterator][mdn-iterator-protocol] function, within an [iterator][mdn-iterator-protocol] pipeline must return an [iterator][mdn-iterator-protocol].
-   Starting from the left, each returned [iterator][mdn-iterator-protocol] is passed to the next [iterator][mdn-iterator-protocol] function.
-   The result of the last [iterator][mdn-iterator-protocol] function is the result of the pipeline.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint-disable function-call-argument-newline, function-paren-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var iterHead = require( '@stdlib/iter/head' );
var iterMap = require( '@stdlib/iter/map' );
var iterSome = require( '@stdlib/iter/some' );
var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
var iterPipeline = require( '@stdlib/iter/pipeline' );

function threshold( r ) {
    return ( r > 0.95 );
}

// Create a pipeline which tests whether at least 5% of values exceed a threshold:
var p = iterPipeline(
    // Apply a threshold to iterated values:
    iterThunk( iterMap, threshold ),

    // Limit the sequence to 100 values:
    iterThunk( iterHead, 100 ),

    // Test whether at least 5 values exceed the threshold:
    iterThunk( iterSome, 5 )
);

// Define the number of random number sequences to analyze:
var N = 100;

// Initialize a counter for sequences satisfying the 5% threshold:
var count = 0;

// Perform analysis...
var bool;
var i;
for ( i = 0; i < N; i++ ) {
    bool = p( randu() );
    if ( bool ) {
        count += 1;
    }
    console.log( bool );
}
console.log( '%d of %d', count, N );
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

-   <span class="package-name">[`@stdlib/iter/flow`][@stdlib/iter/flow]</span><span class="delimiter">: </span><span class="description">create a fluent interface for chaining together iterator methods.</span>
-   <span class="package-name">[`@stdlib/iter/pipeline-thunk`][@stdlib/iter/pipeline-thunk]</span><span class="delimiter">: </span><span class="description">create an iterator thunk.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/flow]: https://github.com/stdlib-js/iter/tree/main/flow

[@stdlib/iter/pipeline-thunk]: https://github.com/stdlib-js/iter/tree/main/pipeline-thunk

<!-- </related-links> -->

</section>

<!-- /.links -->
