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

# iterSome

> Test whether at least `n` [iterated][mdn-iterator-protocol] values are truthy.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterSome = require( '@stdlib/iter/some' );
```

#### iterSome( iterator, n )

Tests whether at least `n` [iterated][mdn-iterator-protocol] values are truthy.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 0, 0, 1, 1, 1 ] );

var bool = iterSome( arr, 3 );
// returns true
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any iterated values, the function returns `false`.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var bool = iterSome( array2iterator( [] ), 1 );
// returns false
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
var iterSome = require( '@stdlib/iter/some' );

function threshold( r ) {
    return ( r > 0.95 );
}

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var riter = randu( opts );

// Create an iterator which applies a threshold to generated numbers:
var miter = iterMap( riter, threshold );

// Determine if at least 5 values are "truthy":
var bool = iterSome( miter, 5 );
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

-   <span class="package-name">[`@stdlib/iter/any`][@stdlib/iter/any]</span><span class="delimiter">: </span><span class="description">test whether at least one iterated value is truthy.</span>
-   <span class="package-name">[`@stdlib/iter/every`][@stdlib/iter/every]</span><span class="delimiter">: </span><span class="description">test whether all iterated values are truthy.</span>
-   <span class="package-name">[`@stdlib/iter/for-each`][@stdlib/iter/for-each]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value before returning the iterated value.</span>
-   <span class="package-name">[`@stdlib/iter/none`][@stdlib/iter/none]</span><span class="delimiter">: </span><span class="description">test whether all iterated values are falsy.</span>
-   <span class="package-name">[`@stdlib/iter/some-by`][@stdlib/iter/some-by]</span><span class="delimiter">: </span><span class="description">test whether at least `n` iterated values pass a test implemented by a predicate function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/any]: https://github.com/stdlib-js/iter/tree/main/any

[@stdlib/iter/every]: https://github.com/stdlib-js/iter/tree/main/every

[@stdlib/iter/for-each]: https://github.com/stdlib-js/iter/tree/main/for-each

[@stdlib/iter/none]: https://github.com/stdlib-js/iter/tree/main/none

[@stdlib/iter/some-by]: https://github.com/stdlib-js/iter/tree/main/some-by

<!-- </related-links> -->

</section>

<!-- /.links -->
