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

# iterThunk

> Create an [iterator][mdn-iterator-protocol] "thunk".

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterThunk = require( '@stdlib/iter/pipeline-thunk' );
```

#### iterThunk( iterFcn\[, ...args] )

Returns an [iterator][mdn-iterator-protocol] "thunk".

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterSome = require( '@stdlib/iter/some' );

var thunk = iterThunk( iterSome, 3 );

var arr = array2iterator( [ 0, 0, 1, 1, 1 ] );
var bool = thunk( arr );
// returns true

arr = array2iterator( [ 0, 0, 1, 0, 1 ] );
bool = thunk( arr );
// returns false
```

A provided [iterator][mdn-iterator-protocol] function should have the following function signature:

```text
function iterFcn( iterator[, ...args] ) {...}
```

where

-   **iterator**: an [iterator][mdn-iterator-protocol].
-   **...args**: additional [iterator][mdn-iterator-protocol] function arguments.

The returned function expects a single argument

-   **iterator**: an [iterator][mdn-iterator-protocol].

and invokes `iterFcn` with the provided [iterator][mdn-iterator-protocol] and any previously provided `args`.

Accordingly, this function implements left-to-right [partial application][@stdlib/utils/papply] with special consideration for functions which act upon [iterator][mdn-iterator-protocol] sequences.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function is useful within the context of [iterator][mdn-iterator-protocol] pipelines as a means to defer execution until a pipeline is ready for data flow.
-   The function evaluation context is **always** `null`.

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
var iterPipeline = require( '@stdlib/iter/pipeline' );
var iterThunk = require( '@stdlib/iter/pipeline-thunk' );

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

-   <span class="package-name">[`@stdlib/iter/pipeline`][@stdlib/iter/pipeline]</span><span class="delimiter">: </span><span class="description">create an iterator pipeline.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/utils/papply]: https://github.com/stdlib-js/utils-papply

<!-- <related-links> -->

[@stdlib/iter/pipeline]: https://github.com/stdlib-js/iter/tree/main/pipeline

<!-- </related-links> -->

</section>

<!-- /.links -->
