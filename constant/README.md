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

# iterConstant

> Create an iterator which always returns the same value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterConstant = require( '@stdlib/iter/constant' );
```

#### iterConstant( value\[, options] )

Returns an iterator which always returns the same value.

```javascript
var it = iterConstant( 3.14 );
// returns <Object>

var v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `1e308`.

By default, the function returns an infinite iterator (i.e., an iterator which never ends). To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterConstant( 3.14, opts );
// returns <Object>

var v = it.next().value;
// returns 3.14

v = it.next().value;
// returns 3.14

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When provided an `object` reference, the returned iterator always returns the same reference.

    ```javascript
    var arr = [ 1, 2, 3, 4 ];

    var it = iterConstant( arr );
    // returns <Object>

    var v1 = it.next().value;
    // returns [ 1, 2, 3, 4 ]

    var bool = ( v1 === arr );
    // returns true

    var v2 = it.next().value;
    // returns [ 1, 2, 3, 4 ]

    bool = ( v2 === arr );
    // returns true

    // ...
    ```

    To avoid unwanted `object` mutation, copy a provided `value` **before** creating an iterator.

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var iterConstant = require( '@stdlib/iter/constant' );

// Create an iterator:
var opts = {
    'iter': 10
};
var it = iterConstant( randu(), opts );

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

-   <span class="package-name">[`@stdlib/utils/constant-function`][@stdlib/utils/constant-function]</span><span class="delimiter">: </span><span class="description">constant function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/utils/constant-function]: https://github.com/stdlib-js/utils-constant-function

<!-- </related-links> -->

</section>

<!-- /.links -->
