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

# Iterators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Standard library iterator utilities.

<section class="installation">

## Installation

```bash
npm install @stdlib/iter
```

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/iter' );
```

#### ns

Standard library iterator utilities.

```javascript
var objectKeys = require( '@stdlib/utils/keys' );

var keys = objectKeys( ns );
// e.g., returns [ 'iterAny', 'iterAnyBy', ... ]
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`iterAdvance( iterator[, n] )`][@stdlib/iter/advance]</span><span class="delimiter">: </span><span class="description">advance an iterator.</span>
-   <span class="signature">[`iterAnyBy( iterator, predicate[, thisArg] )`][@stdlib/iter/any-by]</span><span class="delimiter">: </span><span class="description">test whether at least one iterated value passes a test implemented by a predicate function.</span>
-   <span class="signature">[`iterAny( iterator )`][@stdlib/iter/any]</span><span class="delimiter">: </span><span class="description">test whether at least one iterated value is truthy.</span>
-   <span class="signature">[`iterConcat( iter0, ...iterator )`][@stdlib/iter/concat]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over the values of two or more iterators.</span>
-   <span class="signature">[`iterConstant( value[, options] )`][@stdlib/iter/constant]</span><span class="delimiter">: </span><span class="description">create an iterator which always returns the same value.</span>
-   <span class="signature">[`iterCounter( iterator )`][@stdlib/iter/counter]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes the number of iterated values.</span>
-   <span class="signature">[`iterDatespace( start, stop[, N][, options] )`][@stdlib/iter/datespace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced dates over a specified interval.</span>
-   <span class="signature">[`iterDedupeBy( iterator, [limit,] fcn )`][@stdlib/iter/dedupe-by]</span><span class="delimiter">: </span><span class="description">create an iterator which removes consecutive values that resolve to the same value according to a provided function.</span>
-   <span class="signature">[`iterDedupe( iterator[, limit] )`][@stdlib/iter/dedupe]</span><span class="delimiter">: </span><span class="description">create an iterator which removes consecutive duplicated values.</span>
-   <span class="signature">[`iterEmpty()`][@stdlib/iter/empty]</span><span class="delimiter">: </span><span class="description">create an empty iterator.</span>
-   <span class="signature">[`iterEveryBy( iterator, predicate[, thisArg] )`][@stdlib/iter/every-by]</span><span class="delimiter">: </span><span class="description">test whether every iterated value passes a test implemented by a predicate function.</span>
-   <span class="signature">[`iterEvery( iterator )`][@stdlib/iter/every]</span><span class="delimiter">: </span><span class="description">test whether all iterated values are truthy.</span>
-   <span class="signature">[`iterFill( iterator, value[, begin[, end]] )`][@stdlib/iter/fill]</span><span class="delimiter">: </span><span class="description">create an iterator which replaces all values from a provided iterator from a start index to an end index with a static value.</span>
-   <span class="signature">[`iterFilterMap( iterator, fcn[, thisArg] )`][@stdlib/iter/filter-map]</span><span class="delimiter">: </span><span class="description">create an iterator which both filters and maps the values of another iterator.</span>
-   <span class="signature">[`iterFilter( iterator, predicate[, thisArg] )`][@stdlib/iter/filter]</span><span class="delimiter">: </span><span class="description">create an iterator which filters the values of another iterator according to a predicate function.</span>
-   <span class="signature">[`iterFirst( iterator )`][@stdlib/iter/first]</span><span class="delimiter">: </span><span class="description">return the first iterated value.</span>
-   <span class="signature">[`iterFlow( methods )`][@stdlib/iter/flow]</span><span class="delimiter">: </span><span class="description">create a fluent interface for chaining together iterator methods.</span>
-   <span class="signature">[`iterForEach( iterator, fcn[, thisArg] )`][@stdlib/iter/for-each]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value before returning the iterated value.</span>
-   <span class="signature">[`iterHead( iterator, n )`][@stdlib/iter/head]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the first `n` values of a provided iterator.</span>
-   <span class="signature">[`iterIncrspace( start, stop[, increment] )`][@stdlib/iter/incrspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers according to a specified increment.</span>
-   <span class="signature">[`iterIntersectionByHash( iter0, ...iterator, hashFcn[, thisArg] )`][@stdlib/iter/intersection-by-hash]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the intersection of two or more iterators according to a hash function.</span>
-   <span class="signature">[`iterIntersection( iter0, ...iterator )`][@stdlib/iter/intersection]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the intersection of two or more iterators.</span>
-   <span class="signature">[`iterLast( iterator )`][@stdlib/iter/last]</span><span class="delimiter">: </span><span class="description">consume an entire iterator and return the last iterated value.</span>
-   <span class="signature">[`iterLength( iterator )`][@stdlib/iter/length]</span><span class="delimiter">: </span><span class="description">return an iterator's length.</span>
-   <span class="signature">[`iterLinspace( start, stop[, N] )`][@stdlib/iter/linspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers over a specified interval.</span>
-   <span class="signature">[`iterLogspace( start, stop[, N][, options] )`][@stdlib/iter/logspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns evenly spaced numbers over a specified interval.</span>
-   <span class="signature">[`iterMap( iterator, fcn[, thisArg] )`][@stdlib/iter/map]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a function for each iterated value.</span>
-   <span class="signature">[`iterMapN( iter0, ...iterator, fcn[, thisArg] )`][@stdlib/iter/mapn]</span><span class="delimiter">: </span><span class="description">create an iterator which transforms iterated values from two or more iterators by applying the iterated values as arguments to a provided function.</span>
-   <span class="signature">[`iterNoneBy( iterator, predicate[, thisArg] )`][@stdlib/iter/none-by]</span><span class="delimiter">: </span><span class="description">test whether every iterated value fails a test implemented by a predicate function.</span>
-   <span class="signature">[`iterNone( iterator )`][@stdlib/iter/none]</span><span class="delimiter">: </span><span class="description">test whether all iterated values are falsy.</span>
-   <span class="signature">[`iterNth( iterator, n )`][@stdlib/iter/nth]</span><span class="delimiter">: </span><span class="description">return the nth iterated value.</span>
-   <span class="signature">[`iterThunk( iterFcn[, ...args] )`][@stdlib/iter/pipeline-thunk]</span><span class="delimiter">: </span><span class="description">create an iterator "thunk".</span>
-   <span class="signature">[`iterPipeline( iterFcn0[, ...iterFcn] )`][@stdlib/iter/pipeline]</span><span class="delimiter">: </span><span class="description">create an iterator pipeline.</span>
-   <span class="signature">[`iterPop( iterator[, clbk[, thisArg]] )`][@stdlib/iter/pop]</span><span class="delimiter">: </span><span class="description">create an iterator which skips the last value of a provided iterator.</span>
-   <span class="signature">[`iterPush( iterator, ...items )`][@stdlib/iter/push]</span><span class="delimiter">: </span><span class="description">create an iterator which appends additional values to the end of a provided iterator.</span>
-   <span class="signature">[`iterReject( iterator, predicate[, thisArg] )`][@stdlib/iter/reject]</span><span class="delimiter">: </span><span class="description">create an iterator which rejects the values of another iterator according to a predicate function.</span>
-   <span class="signature">[`iterReplicateBy( iterator, fcn[, thisArg] )`][@stdlib/iter/replicate-by]</span><span class="delimiter">: </span><span class="description">create an iterator which replicates each iterated value according to a provided function.</span>
-   <span class="signature">[`iterReplicate( iterator, n )`][@stdlib/iter/replicate]</span><span class="delimiter">: </span><span class="description">create an iterator which replicates each iterated value a specified number of times.</span>
-   <span class="signature">[`iterShift( iterator[, clbk[, thisArg]] )`][@stdlib/iter/shift]</span><span class="delimiter">: </span><span class="description">create an iterator which skips the first value of a provided iterator.</span>
-   <span class="signature">[`iterSlice( iterator[, begin[, end]] )`][@stdlib/iter/slice]</span><span class="delimiter">: </span><span class="description">create an iterator which returns a subsequence of iterated values from a provided iterator.</span>
-   <span class="signature">[`iterSomeBy( iterator, n, predicate[, thisArg] )`][@stdlib/iter/some-by]</span><span class="delimiter">: </span><span class="description">test whether at least `n` iterated values pass a test implemented by a predicate function.</span>
-   <span class="signature">[`iterSome( iterator, n )`][@stdlib/iter/some]</span><span class="delimiter">: </span><span class="description">test whether at least `n` iterated values are truthy.</span>
-   <span class="signature">[`iterStep( start, increment[, N] )`][@stdlib/iter/step]</span><span class="delimiter">: </span><span class="description">create an iterator which returns a sequence of numbers according to a specified increment.</span>
-   <span class="signature">[`iterStridedBy( iterator, fcn[, offset[, eager]][, thisArg] )`][@stdlib/iter/strided-by]</span><span class="delimiter">: </span><span class="description">create an iterator which steps according to a provided callback function.</span>
-   <span class="signature">[`iterStrided( iterator, stride[, offset[, eager]] )`][@stdlib/iter/strided]</span><span class="delimiter">: </span><span class="description">create an iterator which steps by a specified amount.</span>
-   <span class="signature">[`iterator2arrayviewRight( iterator, dest[, begin[, end]][, mapFcn[, thisArg]] )`][@stdlib/iter/to-array-view-right]</span><span class="delimiter">: </span><span class="description">fill an array-like object view from right to left with values returned from an iterator.</span>
-   <span class="signature">[`iterator2arrayview( iterator, dest[, begin[, end]][, mapFcn[, thisArg]] )`][@stdlib/iter/to-array-view]</span><span class="delimiter">: </span><span class="description">fill an array-like object view with values returned from an iterator.</span>
-   <span class="signature">[`iterUnion( iter0, ...iterator )`][@stdlib/iter/union]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the union of two or more iterators.</span>
-   <span class="signature">[`iterUniqueByHash( iterator, hashFcn[, thisArg] )`][@stdlib/iter/unique-by-hash]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values according to a hash function.</span>
-   <span class="signature">[`iterUniqueBy( iterator, predicate[, thisArg] )`][@stdlib/iter/unique-by]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values according to a predicate function.</span>
-   <span class="signature">[`iterUnique( iterator )`][@stdlib/iter/unique]</span><span class="delimiter">: </span><span class="description">create an iterator which returns unique values.</span>
-   <span class="signature">[`iterUnitspace( start[, stop] )`][@stdlib/iter/unitspace]</span><span class="delimiter">: </span><span class="description">create an iterator which returns numbers incremented by `1`.</span>
-   <span class="signature">[`iterUnshift( iterator, ...items )`][@stdlib/iter/unshift]</span><span class="delimiter">: </span><span class="description">create an iterator which prepends values to the beginning of a provided iterator.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var uncapitalize = require( '@stdlib/string/uncapitalize' );
var replace = require( '@stdlib/string/replace' );
var contains = require( '@stdlib/assert/contains' );
var randu = require( '@stdlib/random/iter/randu' );
var ns = require( '@stdlib/iter' );

// Create a fluent interface for chaining together iterator operations...

// Retrieve all the iterator utility names:
var keys = objectKeys( ns );

// Define a list of utilities to exclude from the fluent API:
var exclude = [ 'iterFlow', 'iterPipeline', 'iterThunk' ];

// Map each utility name to a fluent interface method...
var methods = {};
var key;
var k;
var i;
for ( i = 0; i < keys.length; i++ ) {
    key = keys[ i ];
    if ( contains( exclude, key ) ) {
        continue;
    }
    k = uncapitalize( replace( key, /^iter/, '' ) );
    methods[ k ] = ns[ key ];
}

// Create a fluent interface:
var FluentIterator = ns.iterFlow( methods );

// Create a new fluent interface iterator:
var it1 = new FluentIterator( randu() );

// Define a predicate function for filtering values:
function predicate( v ) {
    return ( v > 0.25 && v < 0.75 );
}

// Define a function which transforms iterated values:
function transform( v ) {
    return v * 10.0;
}

// Define a function to be invoked for each iterated value:
function log( v ) {
    console.log( v );
}

// Chain together a sequence of operations:
var it2 = it1.filter( predicate )
    .map( transform )
    .head( 10 )
    .forEach( log );

// Perform manual iteration...
var v;
while ( true ) {
    v = it2.next();
    if ( v.done ) {
        break;
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter

[test-image]: https://github.com/stdlib-js/iter/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/iter/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter/main/LICENSE

<!-- <toc-links> -->

[@stdlib/iter/advance]: https://github.com/stdlib-js/iter/tree/main/advance

[@stdlib/iter/any-by]: https://github.com/stdlib-js/iter/tree/main/any-by

[@stdlib/iter/any]: https://github.com/stdlib-js/iter/tree/main/any

[@stdlib/iter/concat]: https://github.com/stdlib-js/iter/tree/main/concat

[@stdlib/iter/constant]: https://github.com/stdlib-js/iter/tree/main/constant

[@stdlib/iter/counter]: https://github.com/stdlib-js/iter/tree/main/counter

[@stdlib/iter/datespace]: https://github.com/stdlib-js/iter/tree/main/datespace

[@stdlib/iter/dedupe-by]: https://github.com/stdlib-js/iter/tree/main/dedupe-by

[@stdlib/iter/dedupe]: https://github.com/stdlib-js/iter/tree/main/dedupe

[@stdlib/iter/empty]: https://github.com/stdlib-js/iter/tree/main/empty

[@stdlib/iter/every-by]: https://github.com/stdlib-js/iter/tree/main/every-by

[@stdlib/iter/every]: https://github.com/stdlib-js/iter/tree/main/every

[@stdlib/iter/fill]: https://github.com/stdlib-js/iter/tree/main/fill

[@stdlib/iter/filter-map]: https://github.com/stdlib-js/iter/tree/main/filter-map

[@stdlib/iter/filter]: https://github.com/stdlib-js/iter/tree/main/filter

[@stdlib/iter/first]: https://github.com/stdlib-js/iter/tree/main/first

[@stdlib/iter/flow]: https://github.com/stdlib-js/iter/tree/main/flow

[@stdlib/iter/for-each]: https://github.com/stdlib-js/iter/tree/main/for-each

[@stdlib/iter/head]: https://github.com/stdlib-js/iter/tree/main/head

[@stdlib/iter/incrspace]: https://github.com/stdlib-js/iter/tree/main/incrspace

[@stdlib/iter/intersection-by-hash]: https://github.com/stdlib-js/iter/tree/main/intersection-by-hash

[@stdlib/iter/intersection]: https://github.com/stdlib-js/iter/tree/main/intersection

[@stdlib/iter/last]: https://github.com/stdlib-js/iter/tree/main/last

[@stdlib/iter/length]: https://github.com/stdlib-js/iter/tree/main/length

[@stdlib/iter/linspace]: https://github.com/stdlib-js/iter/tree/main/linspace

[@stdlib/iter/logspace]: https://github.com/stdlib-js/iter/tree/main/logspace

[@stdlib/iter/map]: https://github.com/stdlib-js/iter/tree/main/map

[@stdlib/iter/mapn]: https://github.com/stdlib-js/iter/tree/main/mapn

[@stdlib/iter/none-by]: https://github.com/stdlib-js/iter/tree/main/none-by

[@stdlib/iter/none]: https://github.com/stdlib-js/iter/tree/main/none

[@stdlib/iter/nth]: https://github.com/stdlib-js/iter/tree/main/nth

[@stdlib/iter/pipeline-thunk]: https://github.com/stdlib-js/iter/tree/main/pipeline-thunk

[@stdlib/iter/pipeline]: https://github.com/stdlib-js/iter/tree/main/pipeline

[@stdlib/iter/pop]: https://github.com/stdlib-js/iter/tree/main/pop

[@stdlib/iter/push]: https://github.com/stdlib-js/iter/tree/main/push

[@stdlib/iter/reject]: https://github.com/stdlib-js/iter/tree/main/reject

[@stdlib/iter/replicate-by]: https://github.com/stdlib-js/iter/tree/main/replicate-by

[@stdlib/iter/replicate]: https://github.com/stdlib-js/iter/tree/main/replicate

[@stdlib/iter/shift]: https://github.com/stdlib-js/iter/tree/main/shift

[@stdlib/iter/slice]: https://github.com/stdlib-js/iter/tree/main/slice

[@stdlib/iter/some-by]: https://github.com/stdlib-js/iter/tree/main/some-by

[@stdlib/iter/some]: https://github.com/stdlib-js/iter/tree/main/some

[@stdlib/iter/step]: https://github.com/stdlib-js/iter/tree/main/step

[@stdlib/iter/strided-by]: https://github.com/stdlib-js/iter/tree/main/strided-by

[@stdlib/iter/strided]: https://github.com/stdlib-js/iter/tree/main/strided

[@stdlib/iter/to-array-view-right]: https://github.com/stdlib-js/iter/tree/main/to-array-view-right

[@stdlib/iter/to-array-view]: https://github.com/stdlib-js/iter/tree/main/to-array-view

[@stdlib/iter/union]: https://github.com/stdlib-js/iter/tree/main/union

[@stdlib/iter/unique-by-hash]: https://github.com/stdlib-js/iter/tree/main/unique-by-hash

[@stdlib/iter/unique-by]: https://github.com/stdlib-js/iter/tree/main/unique-by

[@stdlib/iter/unique]: https://github.com/stdlib-js/iter/tree/main/unique

[@stdlib/iter/unitspace]: https://github.com/stdlib-js/iter/tree/main/unitspace

[@stdlib/iter/unshift]: https://github.com/stdlib-js/iter/tree/main/unshift

<!-- </toc-links> -->

</section>

<!-- /.links -->
