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

# iterAdvance

> Advance an [iterator][mdn-iterator-protocol].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterAdvance = require( '@stdlib/iter/advance' );
```

#### iterAdvance( iterator\[, n] )

Eagerly advances and returns a provided [`iterator`][mdn-iterator-protocol].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );
var it = iterAdvance( arr );

var bool = ( it === arr );
// returns true

var v = it.next().done;
// returns true
```

By default, the function **eagerly** consumes an entire [`iterator`][mdn-iterator-protocol] (i.e., `n == 1e308`). To limit the number of iterations, provide a second argument.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );
var it = iterAdvance( arr, 4 );

var bool = ( it === arr );
// returns true

var v = it.next().value;
// returns 1

bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function **eagerly** advances an input [iterator][mdn-iterator-protocol] `n` iterations or until the input [`iterator`][mdn-iterator-protocol] finishes, whichever comes first.

-   This function is equivalent to performing manual iteration using a `while` loop.

    ```javascript
    var array2iterator = require( '@stdlib/array/to-iterator' );

    var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );

    var i = 0;
    var v;
    while ( i < 4 ) {
        v = arr.next();
        if ( v.done ) {
            break;
        }
        i += 1;
    }

    v = arr.next().value;
    // returns 1

    var bool = arr.next().done;
    // returns true
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var iterLength = require( '@stdlib/iter/length' );
var iterAdvance = require( '@stdlib/iter/advance' );

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var it1 = randu( opts );

// Discard the first 10 values:
var it2 = iterAdvance( it1, 10 );

// Determine the iterator length:
var len = iterLength( it2 );
// returns 90
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

-   <span class="package-name">[`@stdlib/iter/head`][@stdlib/iter/head]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the first `n` values of a provided iterator.</span>
-   <span class="package-name">[`@stdlib/iter/slice`][@stdlib/iter/slice]</span><span class="delimiter">: </span><span class="description">create an iterator which returns a subsequence of iterated values from a provided iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/head]: https://github.com/stdlib-js/iter/tree/main/head

[@stdlib/iter/slice]: https://github.com/stdlib-js/iter/tree/main/slice

<!-- </related-links> -->

</section>

<!-- /.links -->
