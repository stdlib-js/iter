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

# iterSomeBy

> Test whether at least `n` [iterated][mdn-iterator-protocol] values pass a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterSomeBy = require( '@stdlib/iter/some-by' );
```

#### iterSomeBy( iterator, n, predicate\[, thisArg] )

Tests whether at least `n` [iterated][mdn-iterator-protocol] values **pass** a test implemented by a `predicate` function.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( v ) {
    return ( v > 0 );
}

var arr = array2iterator( [ 1, 1, 1, 0, 1 ] );

var bool = iterSomeBy( arr, 4, predicate );
// returns true
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any iterated values, the function returns `false`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate() {
    return true;
}

var bool = iterSomeBy( array2iterator( [] ), 1, predicate );
// returns false
```

A `predicate` function is provided two arguments:

-   **value**: iterated value.
-   **index**: iteration index (zero-based).

To set the execution context of the `predicate` function, provide a `thisArg`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

function predicate( v ) {
    this.count += 1;
    return ( v > 0 );
}

var arr = array2iterator( [ 1, 1, 0, 1, 1 ] );

var ctx = {
    'count': 0
};

var bool = iterSomeBy( arr, 3, predicate, ctx );
// returns true

var n = ctx.count;
// returns 4
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function immediately returns upon encountering `n` truthy return values.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/iter/randu' );
var iterSomeBy = require( '@stdlib/iter/some-by' );

function threshold( r ) {
    return ( r >= 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Determine if at least 5 values exceed a threshold:
var bool = iterSomeBy( riter, 5, threshold );
// returns <boolean>

console.log( bool );
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

-   <span class="package-name">[`@stdlib/iter/any-by`][@stdlib/iter/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one iterated value passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/iter/every-by`][@stdlib/iter/every-by]</span><span class="delimiter">: </span><span class="description">test whether every iterated value passes a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/iter/for-each`][@stdlib/iter/for-each]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value before returning the iterated value.</span>
-   <span class="package-name">[`@stdlib/iter/none-by`][@stdlib/iter/none-by]</span><span class="delimiter">: </span><span class="description">test whether every iterated value fails a test implemented by a predicate function.</span>
-   <span class="package-name">[`@stdlib/iter/some`][@stdlib/iter/some]</span><span class="delimiter">: </span><span class="description">test whether at least `n` iterated values are truthy.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/any-by]: https://github.com/stdlib-js/iter/tree/main/any-by

[@stdlib/iter/every-by]: https://github.com/stdlib-js/iter/tree/main/every-by

[@stdlib/iter/for-each]: https://github.com/stdlib-js/iter/tree/main/for-each

[@stdlib/iter/none-by]: https://github.com/stdlib-js/iter/tree/main/none-by

[@stdlib/iter/some]: https://github.com/stdlib-js/iter/tree/main/some

<!-- </related-links> -->

</section>

<!-- /.links -->
