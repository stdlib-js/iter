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

# iterStep

> Create an iterator which returns a sequence of numbers according to a specified increment.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterStep = require( '@stdlib/iter/step' );
```

#### iterStep( start, increment\[, N] )

Returns an iterator which returns a sequence of numbers according to a specified `increment`.

```javascript
var it = iterStep( 0, 2 );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 2

v = it.next().value;
// returns 4

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of returned values, provide a third argument.

```javascript
var it = iterStep( 0, 2, 3 );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 2

v = it.next().value;
// returns 4

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned iterator is guaranteed to return the `start` value. Beware, however, that values subsequent to the `start` value are subject to floating-point rounding errors. For example,

    ```javascript
    var it = iterStep( 0.1, 0.2 );
    // returns <Object>

    var v = it.next().value;
    // returns 0.1

    v = it.next().value;
    // returns ~0.3

    v = it.next().value;
    // returns 0.5
    ```

    If you desire more control over value precision, consider using [roundn][@stdlib/math/base/special/roundn]:

    ```javascript
    var roundn = require( '@stdlib/math/base/special/roundn' );
    var iterMap = require( '@stdlib/iter/map' );

    function round( v ) {
        return roundn( v, -2 );
    }

    // Create an iterator returning values subject to floating-point errors:
    var it1 = iterStep( 0.1, 0.2, 10 );

    // Create an iterator to round each value to the nearest hundredth:
    var it2 = iterMap( it1, roundn );

    // Perform manual iteration...
    var v;
    while ( true ) {
        v = it2.next();
        if ( v.done ) {
            break;
        }
        console.log( v.value );
    }
    ```

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterStep = require( '@stdlib/iter/step' );

// Create an iterator which is subject to floating-point rounding errors:
var it = iterStep( 0.0, 0.02, 50 );

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
-   <span class="package-name">[`@stdlib/iter/logspace`][@stdlib/iter/logspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers on a log scale.</span>
-   <span class="package-name">[`@stdlib/iter/unitspace`][@stdlib/iter/unitspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns numbers incremented by one.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array-from-iterator

[@stdlib/iter/datespace]: https://github.com/stdlib-js/iter/tree/main/datespace

[@stdlib/iter/incrspace]: https://github.com/stdlib-js/iter/tree/main/incrspace

[@stdlib/iter/linspace]: https://github.com/stdlib-js/iter/tree/main/linspace

[@stdlib/iter/logspace]: https://github.com/stdlib-js/iter/tree/main/logspace

[@stdlib/iter/unitspace]: https://github.com/stdlib-js/iter/tree/main/unitspace

<!-- </related-links> -->

</section>

<!-- /.links -->
