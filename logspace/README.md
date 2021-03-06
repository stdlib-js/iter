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

# iterLogspace

> Create an iterator which returns evenly spaced numbers over a specified interval.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterLogspace = require( '@stdlib/iter/logspace' );
```

#### iterLogspace( start, stop\[, N]\[, options] )

Returns an iterator which returns evenly spaced numbers on a log scale.

```javascript
var it = iterLogspace( 0, 10 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns ~1.26

v = it.next().value;
// returns ~1.59

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function accepts the following `options`:

-   **base**: base of the log space. Default: `10`.

By default, the iterator returns `100` values. To return an alternative number of values, provide an `N` argument.

```javascript
var it = iterLogspace( 0, 2, 3 );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 10

v = it.next().value;
// returns 100

var bool = it.next().done;
// returns true
```

To specify an alternative log base, provide a `base` option.

```javascript
var opts = {
    'base': 2
};
var it = iterLogspace( 0, 10, 11, opts );
// returns <Object>

var v = it.next().value;
// returns 1

v = it.next().value;
// returns 2

v = it.next().value;
// returns 4

// ...
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned iterator is guaranteed to include the values `base^start` and `base^stop`. Beware, however, that exponents between the `start` and `stop` are subject to floating-point rounding errors.
-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterLogspace = require( '@stdlib/iter/logspace' );

// Create a base-2 iterator:
var opts = {
    'base': 2
};
var it = iterLogspace( 0, 16, 17, opts );

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

-   <span class="package-name">[`@stdlib/array/from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="package-name">[`@stdlib/iter/datespace`][@stdlib/iter/datespace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced dates over a specified interval.</span>
-   <span class="package-name">[`@stdlib/iter/incrspace`][@stdlib/iter/incrspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers according to a specified increment.</span>
-   <span class="package-name">[`@stdlib/iter/linspace`][@stdlib/iter/linspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers over a specified interval.</span>
-   <span class="package-name">[`@stdlib/iter/step`][@stdlib/iter/step]</span><span class="delimiter">: </span><span class="description">create an iterator which returns a sequence of numbers according to a specified increment.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array-from-iterator

[@stdlib/iter/datespace]: https://github.com/stdlib-js/iter/tree/main/datespace

[@stdlib/iter/incrspace]: https://github.com/stdlib-js/iter/tree/main/incrspace

[@stdlib/iter/linspace]: https://github.com/stdlib-js/iter/tree/main/linspace

[@stdlib/iter/step]: https://github.com/stdlib-js/iter/tree/main/step

<!-- </related-links> -->

</section>

<!-- /.links -->
