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

# iterFlow

> Create a fluent interface for chaining together [iterator][mdn-iterator-protocol] methods.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterFlow = require( '@stdlib/iter/flow' );
```

#### iterFlow( methods )

Returns a fluent interface [iterator][mdn-iterator-protocol] constructor with a customized `prototype` based on provided `methods`.

```javascript
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});
```

The `methods` argument should be an `object` which maps constructor method names to [iterator][mdn-iterator-protocol] functions. Each [iterator][mdn-iterator-protocol] function should have the following function signature:

```text
function iterFcn( iterator[, ...args] ) {...}
```

where

-   **iterator**: an [iterator][mdn-iterator-protocol].
-   **...args**: additional [iterator][mdn-iterator-protocol] function arguments.

When a fluent interface [iterator][mdn-iterator-protocol] method is invoked, the method invokes the corresponding [iterator][mdn-iterator-protocol] function with an [iterator][mdn-iterator-protocol] and provided method arguments.

If an [iterator][mdn-iterator-protocol] function returns an [iterator][mdn-iterator-protocol], the corresponding fluent interface method returns a **new** fluent interface instance; otherwise, the corresponding fluent interface method returns the [iterator][mdn-iterator-protocol] function result.

* * *

##### FluentIterator( iterator )

Returns a new fluent interface [iterator][mdn-iterator-protocol] from a source [`iterator`][mdn-iterator-protocol].

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var src = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Convert the source iterator to a fluent interface iterator:
var it = new FluentIterator( src );

// Test if at least 3 of the first 5 iterated values are truthy:
var bool = it.head( 5 ).some( 3 );
// returns true
```

##### FluentIterator.prototype.next()

Returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var src = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Create a fluent interface iterator:
var it1 = new FluentIterator( src );

// Invoke the `head` method to return an iterator limited to the first 5 source values:
var it2 = it1.head( 5 );

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

##### FluentIterator.prototype.return( \[value] )

Closes a fluent interface [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );

// Create a mini-fluent interface having just the methods `head` and `some`:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var src = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Create a fluent interface iterator:
var it1 = new FluentIterator( src );

// Invoke the `head` method to return an iterator limited to the first 5 source values:
var it2 = it1.head( 5 );

// Get the first value:
var v = it2.next().value;
// returns 0

// Get the second value:
v = it2.next().value;
// returns 0

// Get the third value:
v = it2.next().value;
// returns 1

// Close the iterator:
var bool = it2.return().done;
// returns true

// Attempt to get the fourth value:
v = it2.next().value;
// returns undefined
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

* * *

<section class="notes">

## Notes

-   The [iterator][mdn-iterator-protocol] function evaluation context is **always** `null`.
-   [Iterator][mdn-iterator-protocol] functions which return [iterators][mdn-iterator-protocol] are **expected** to return [iterator][mdn-iterator-protocol] protocol-compliant objects (i.e., an `object` having a `next` method which returns the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished).
-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterHead = require( '@stdlib/iter/head' );
var iterSome = require( '@stdlib/iter/some' );
var iterFlow = require( '@stdlib/iter/flow' );

// Create a "fluent" interface:
var FluentIterator = iterFlow({
    'head': iterHead,
    'some': iterSome
});

// Create a source iterator:
var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Create a new iterator:
var it = new FluentIterator( arr );

var bool = it.head( 5 ).some( 3 );
// returns true

// Create another source iterator:
arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 1 ] );

// Create a new iterator:
it = new FluentIterator( arr );

bool = it.head( 5 ).some( 3 );
// returns false
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

<!-- <related-links> -->

[@stdlib/iter/pipeline]: https://github.com/stdlib-js/iter/tree/main/pipeline

<!-- </related-links> -->

</section>

<!-- /.links -->
