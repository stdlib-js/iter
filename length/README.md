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

# iterLength

> Return an [iterator][mdn-iterator-protocol]'s length.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterLength = require( '@stdlib/iter/length' );
```

#### iterLength( iterator )

Consumes an entire [iterator][mdn-iterator-protocol] and returns the number of [iterated][mdn-iterator-protocol] values (i.e., the [iterator][mdn-iterator-protocol] length).

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );

var len = iterLength( arr );
// returns 5
```

If a provided [`iterator`][mdn-iterator-protocol] does not return any [iterated][mdn-iterator-protocol] values, the function returns `0`.

```javascript
var iterEmpty = require( '@stdlib/iter/empty' );

var len = iterLength( iterEmpty() );
// returns 0
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
var iterLength = require( '@stdlib/iter/length' );

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var iter = randu( opts );

// Determine the iterator length:
var len = iterLength( iter );
// returns 100
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

-   <span class="package-name">[`@stdlib/iter/counter`][@stdlib/iter/counter]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively returns the number of iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/counter]: https://github.com/stdlib-js/iter/tree/main/counter

<!-- </related-links> -->

</section>

<!-- /.links -->
