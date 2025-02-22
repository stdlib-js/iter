/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import iterAdvance = require( './../../advance' );
import iterAny = require( './../../any' );
import iterAnyBy = require( './../../any-by' );
import iterConcat = require( './../../concat' );
import iterConstant = require( './../../constant' );
import iterCounter = require( './../../counter' );
import iterDatespace = require( './../../datespace' );
import iterDedupe = require( './../../dedupe' );
import iterDedupeBy = require( './../../dedupe-by' );
import iterEmpty = require( './../../empty' );
import iterEvery = require( './../../every' );
import iterEveryBy = require( './../../every-by' );
import iterFill = require( './../../fill' );
import iterFilter = require( './../../filter' );
import iterFilterMap = require( './../../filter-map' );
import iterFirst = require( './../../first' );
import iterFlow = require( './../../flow' );
import iterForEach = require( './../../for-each' );
import iterHead = require( './../../head' );
import iterIncrspace = require( './../../incrspace' );
import iterIntersection = require( './../../intersection' );
import iterIntersectionByHash = require( './../../intersection-by-hash' );
import iterLast = require( './../../last' );
import iterLength = require( './../../length' );
import iterLinspace = require( './../../linspace' );
import iterLogspace = require( './../../logspace' );
import iterMap = require( './../../map' );
import iterMapN = require( './../../mapn' );
import iterNone = require( './../../none' );
import iterNoneBy = require( './../../none-by' );
import iterNth = require( './../../nth' );
import iterPipeline = require( './../../pipeline' );
import iterThunk = require( './../../pipeline-thunk' );
import iterPop = require( './../../pop' );
import iterPush = require( './../../push' );
import iterReject = require( './../../reject' );
import iterReplicate = require( './../../replicate' );
import iterReplicateBy = require( './../../replicate-by' );
import iterShift = require( './../../shift' );
import iterSlice = require( './../../slice' );
import iterSome = require( './../../some' );
import iterSomeBy = require( './../../some-by' );
import iterStep = require( './../../step' );
import iterStrided = require( './../../strided' );
import iterStridedBy = require( './../../strided-by' );
import iterator2arrayview = require( './../../to-array-view' );
import iterator2arrayviewRight = require( './../../to-array-view-right' );
import iterUnion = require( './../../union' );
import iterUnique = require( './../../unique' );
import iterUniqueBy = require( './../../unique-by' );
import iterUniqueByHash = require( './../../unique-by-hash' );
import iterUnitspace = require( './../../unitspace' );
import iterUnshift = require( './../../unshift' );
import whileEach = require( './../../while-each' );

/**
* Interface describing the `iter` namespace.
*/
interface Namespace {
	/**
	* Advances an iterator.
	*
	* ## Notes
	*
	* -   The function **eagerly** advances an input iterator `n` iterations or until the input iterator finishes, whichever comes first.
	*
	* @param iterator - input iterator
	* @param n - number of iterations (default: 1e308)
	* @throws `n` must be a nonnegative integer
	* @returns input iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it1 = array2iterator( [ 0, 0, 0, 0, 1 ] );
	*
	* var it2 = ns.iterAdvance( it1, 4 );
	*
	* var v = it2.next().value;
	* // returns 1
	*
	* var bool = it2.next().done;
	* // returns true
	*/
	iterAdvance: typeof iterAdvance;

	/**
	* Tests whether at least one iterated value is truthy.
	*
	* @param iterator - input iterator
	* @returns boolean indicating whether at least one iterated value is truthy
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
	*
	* var bool = ns.iterAny( it );
	* // returns true
	*/
	iterAny: typeof iterAny;

	/**
	* Tests whether at least one iterated value passes a test implemented by a predicate function.
	*
	* @param iterator - input iterator
	* @param predicate - predicate function
	* @param thisArg - execution context
	* @returns boolean indicating whether at least one iterated value passes a test implemented by a predicate function
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( v ) {
	*     return ( v === 1 );
	* }
	*
	* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
	*
	* var bool = ns.iterAnyBy( it, predicate );
	* // returns true
	*/
	iterAnyBy: typeof iterAnyBy;

	/**
	* Returns an iterator which iterates over the values of two or more iterators.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param iter0 - first iterator
	* @param iter1 - second iterator
	* @param iterN - subsequent iterators
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it1 = array2iterator( [ 1, 2 ] );
	* var it2 = array2iterator( [ 3, 4 ] );
	*
	* var iter = ns.iterConcat( it1, it2 );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterConcat: typeof iterConcat;

	/**
	* Returns an iterator which always returns the same value.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param value - value to return
	* @param options - function options
	* @param options.iter - number of iterations (default: 1e308)
	* @throws `iter` option must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterConstant( 3.14 );
	*
	* var v = iter.next().value;
	* // returns 3.14
	*
	* v = iter.next().value;
	* // returns 3.14
	*
	* v = iter.next().value;
	* // returns 3.14
	*
	* // ...
	*/
	iterConstant: typeof iterConstant;

	/**
	* Returns an iterator which iteratively computes the number of iterated values.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterCounter( randu() );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterCounter: typeof iterCounter;

	/**
	* Returns an iterator which returns evenly spaced dates over a specified interval.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param start - starting date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
	* @param stop - stopping date as either a `Date` object, JavaScript timestamp, or a date string (inclusive)
	* @param options - function options
	* @param options.round - specifies how sub-millisecond times should be rounded: 'floor', 'ceil', or 'round' (default: 'floor' )
	* @throws a numeric `start` argument must be a nonnegative integer
	* @throws a numeric `stop` argument must be a nonnegative integer
	* @throws unable to parse date string
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var start = new Date();
	* var iter = ns.iterDatespace( start, new Date( start.getTime()+86400001 ), {
	*     'round': 'floor'
	* });
	*
	* var v = iter.next().value;
	* // returns <Date>
	*
	* v = iter.next().value;
	* // returns <Date>
	*
	* v = iter.next().value;
	* // returns <Date>
	*
	* // ...
	*/
	iterDatespace: typeof iterDatespace;

	/**
	* Returns an iterator which removes consecutive duplicated values.
	*
	* ## Notes
	*
	* -   `NaN` values are considered distinct.
	* -   Uniqueness is determined according to strict equality. Accordingly, objects are **not** checked for deep equality.
	* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param limit - number of allowed consecutive duplicates (default: 1)
	* @throws second argument must be a positive integer
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var arr = array2iterator( [ 1, 1, 2, 3, 3 ] );
	* var iter = ns.iterDedupe( arr );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterDedupe: typeof iterDedupe;

	/**
	* Returns an iterator which removes consecutive values that resolve to the same value according to a provided function.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param limit - number of allowed consecutive duplicates
	* @param fcn - function indicating whether an iterated value is a "duplicate"
	* @throws `limit` must be a positive integer
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function fcn( v ) {
	*     return v;
	* }
	*
	* var arr = array2iterator( [ 1, 1, 2, 3, 3 ] );
	* var iter = ns.iterDedupeBy( arr, 1, fcn );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	iterDedupeBy: typeof iterDedupeBy;

	/**
	* Returns an empty iterator.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @returns iterator
	*
	* @example
	* var iter = ns.iterEmpty();
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterEmpty: typeof iterEmpty;

	/**
	* Tests whether all iterated values are truthy.
	*
	* @param iterator - input iterator
	* @returns boolean indicating whether all iterated values are truthy
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 1, 1, 1, 1, 0 ] );
	*
	* var bool = ns.iterEvery( it );
	* // returns false
	*/
	iterEvery: typeof iterEvery;

	/**
	* Tests whether every iterated value passes a test implemented by a predicate function.
	*
	* @param iterator - input iterator
	* @param predicate - predicate function
	* @param thisArg - execution context
	* @returns boolean indicating whether every iterated value passes a test implemented by a predicate function
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( v ) {
	*     return ( v > 0 );
	* }
	*
	* var it = array2iterator( [ 1, 1, 1, 1, 1 ] );
	*
	* var bool = ns.iterEveryBy( it, predicate );
	* // returns true
	*/
	iterEveryBy: typeof iterEveryBy;

	/**
	* Returns an iterator which replaces all values from a provided iterator from a start index to an end index with a static value.
	*
	* ## Notes
	*
	* -   If `end` exceeds the length of the provided iterator, the returned iterator replaces the subsequence of iterated values starting from `begin` until the last iterated value of the provided iterator.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param value - static (fill) value
	* @param begin - start iteration index (inclusive)
	* @param end - end iteration index (non-inclusive)
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterFill( randu(), 3.14, 0, 2 );
	*
	* var r = iter.next().value;
	* // returns 3.14
	*
	* r = iter.next().value;
	* // returns 3.14
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterFill: typeof iterFill;

	/**
	* Returns an iterator which filters a provided iterator's values according to a predicate function.
	*
	* ## Notes
	*
	* -   When invoked, the `predicate` function is provided two arguments:
	*
	*     -   `value`: iterated value
	*     -   `index`: iteration index (zero-based)
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param predicate - predicate function
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( v ) {
	*     return ( v > 2 );
	* }
	*
	* var src = array2iterator( [ 1, 3, 2, 4 ] );
	* var iter = ns.iterFilter( src, predicate );
	*
	* var v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterFilter: typeof iterFilter;

	/**
	* Returns an iterator which both filters and maps a provided iterator's values.
	*
	* ## Notes
	*
	* -   When invoked, the callback function is provided two arguments:
	*
	*     -   `value`: iterated value
	*     -   `index`: iteration index (zero-based)
	*
	* -   If the callback returns `undefined`, the iterator invokes the function for the next value of the provided iterator; otherwise, the iterator returns the callback's return value.
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param fcn - callback function which both filters and maps
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function fcn( v ) {
	*     if ( v > 2 ) {
	*         return v * 10;
	*     }
	* }
	*
	* var src = array2iterator( [ 1, 3, 2, 4 ] );
	* var iter = ns.iterFilterMap( src, fcn );
	*
	* var v = iter.next().value;
	* // returns 30
	*
	* v = iter.next().value;
	* // returns 40
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterFilterMap: typeof iterFilterMap;

	/**
	* Returns the first iterated value.
	*
	* ## Notes
	*
	* -   The function does **not** consume an entire iterator before returning.
	*
	* @param iterator - input iterator
	* @returns first iterated value
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 1, 0, 0, 0, 0 ] );
	*
	* var v = ns.iterFirst( it );
	* // returns 1
	*/
	iterFirst: typeof iterFirst;

	/**
	* Returns a constructor for creating a fluent interface for chaining together iterator methods.
	*
	* ## Notes
	*
	* -   We assume that each provided iterator function has the following function signature:
	*
	*     ```text
	*     function iterFcn( iterator[, ...args] ) {...}
	*     ```
	*
	*     where `iterator` is an input iterator and `args` are additional iterator function arguments (if any).
	*
	*
	* @param methods - an object mapping method names to iterator functions
	* @throws object property values must be functions
	* @returns constructor
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	* var iterHead = require( './../../head' );
	* var iterSome = require( './../../some' );
	*
	* // Create a "fluent" interface:
	* var FluentIterator = ns.iterFlow({
	*     'head': iterHead,
	*     'some': iterSome
	* });
	*
	* // Create a source iterator:
	* var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );
	*
	* // Create a new iterator:
	* var it = new FluentIterator( arr );
	*
	* var bool = it.head( 5 ).some( 3 );
	* // returns true
	*
	* // Create another source iterator:
	* arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 1 ] );
	*
	* // Create a new iterator:
	* it = new FluentIterator( arr );
	*
	* bool = it.head( 5 ).some( 3 );
	* // returns false
	*/
	iterFlow: typeof iterFlow;

	/**
	* Returns an iterator which invokes a function for each iterated value before returning the iterated value.
	*
	* ## Notes
	*
	* -   When invoked, the callback function is provided two arguments:
	*
	*     -   `value`: iterated value
	*     -   `index`: iteration index (zero-based)
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param fcn - callback function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	* var isnan = require( '@stdlib/math/base/assert/is-nan' );
	*
	* function assert( v ) {
	*     if ( isnan( v ) ) {
	*         throw new Error( 'should not be NaN' );
	*     }
	* }
	*
	* var iter = ns.iterForEach( randu(), assert );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterForEach: typeof iterForEach;

	/**
	* Returns an iterator which returns the first `n` values of a provided iterator.
	*
	* ## Notes
	*
	* -   If a provided iterator only generates `m` values and `m` is less than `n`, the returned iterator only returns `m` values.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param n - number of values
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterHead( randu(), 10 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterHead: typeof iterHead;

	/**
	* Returns an iterator which returns evenly spaced numbers according to a provided increment.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param start - starting value (inclusive)
	* @param stop - stopping value (exclusive)
	* @param increment - increment (default: 1)
	* @returns iterator
	*
	* @example
	* var iter = ns.iterIncrspace( 0, 100, 2 );
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* // ...
	*/
	iterIncrspace: typeof iterIncrspace;

	/**
	* Returns an iterator which returns the intersection of two or more iterators.
	*
	* ## Notes
	*
	* -   Value "uniqueness" is determined according to strict equality.
	* -   A returned iterator internally buffers unique values and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
	* -   Do **not** provide iterators having infinite length.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param iter0 - first iterator
	* @param iter1 - second iterator
	* @param iterN - subsequent iterators
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
	* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
	*
	* var iter = ns.iterIntersection( it1, it2 );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterIntersection: typeof iterIntersection;

	/**
	* Returns an iterator which returns the intersection of two or more iterators according to a hash function.
	*
	* ## Notes
	*
	* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
	* -   A returned iterator internally buffers unique hashes, along with the **first** iterated value resolving to a hash, and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
	* -   Do **not** provide iterators having infinite length.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param iter0 - first iterator
	* @param iter1 - second iterator
	* @param args - subsequent iterators followed by a hash function and an optional hash function execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function hashFcn( v ) {
	*     return v.toString();
	* }
	*
	* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
	* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
	*
	* var iter = ns.iterIntersectionByHash( it1, it2, hashFcn );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterIntersectionByHash: typeof iterIntersectionByHash;

	/**
	* Consumes an entire iterator and returns the last iterated value.
	*
	* @param iterator - input iterator
	* @returns last iterated value
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
	*
	* var v = ns.iterLast( it );
	* // returns 1
	*/
	iterLast: typeof iterLast;

	/**
	* Consumes an entire iterator and returns the number of iterated values (i.e., the iterator length).
	*
	* @param iterator - input iterator
	* @returns iterator length
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
	*
	* var v = ns.iterLength( it );
	* // returns 5
	*/
	iterLength: typeof iterLength;

	/**
	* Returns an iterator which returns evenly spaced numbers over a specified interval.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param start - starting value (inclusive)
	* @param stop - stopping value (inclusive)
	* @param N - number of values (default: 100)
	* @throws `N` must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var iter = ns.iterLinspace( 0, 99, 100 );
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* // ...
	*/
	iterLinspace: typeof iterLinspace;

	/**
	* Returns an iterator which returns evenly spaced numbers on a log scale.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param start - exponent of starting value (inclusive)
	* @param stop - exponent of stopping value (inclusive)
	* @param options - function options
	* @param options.base - base of log space (default: 10)
	* @throws `base` option must be a positive number
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'base': 2
	* };
	* var iter = ns.iterLogspace( 0, 99, opts );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* // ...
	*/
	iterLogspace: typeof iterLogspace;

	/**
	* Returns an iterator which invokes a function for each iterated value.
	*
	* ## Notes
	*
	* -   When invoked, the callback function is provided two arguments:
	*
	*     -   `value`: iterated value
	*     -   `index`: iteration index (zero-based)
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param fcn - callback function which transforms an iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* function transform( v ) {
	*     return v * 10.0;
	* }
	*
	* var iter = ns.iterMap( randu(), transform );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterMap: typeof iterMap;

	/**
	* Returns an iterator which transforms iterated values from two or more iterators by applying the iterated values as arguments to a provided function.
	*
	* ## Notes
	*
	* -   When invoked, the callback function is provided `N+1` arguments, where `N` is the number of provided iterators and the last argument is the iteration index:
	*
	*     -   `...value`: iterated values
	*     -   `index`: iteration index (zero-based)
	*
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	*
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param iter0 - first iterator
	* @param iter1 - second iterator
	* @param args - subsequent iterators, a callback function which transforms an iterated value, and an optional execution context
	* @throws callback argument must be a function
	* @throws arguments preceding the callback argument must be iterators
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function transform( x, y ) {
	*     return x + y;
	* }
	*
	* var it1 = array2iterator( [ 1.0, 2.0 ] );
	* var it2 = array2iterator( [ 3.0, 4.0 ] );
	*
	* var iter = ns.iterMapN( it1, it2, transform );
	*
	* var v = iter.next().value;
	* // returns 4.0
	*
	* v = iter.next().value;
	* // returns 6.0
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterMapN: typeof iterMapN;

	/**
	* Tests whether all iterated values are falsy.
	*
	* @param iterator - input iterator
	* @returns boolean indicating whether all iterated values are falsy
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 0, 0, 0, 0, 1 ] );
	*
	* var bool = ns.iterNone( it );
	* // returns false
	*/
	iterNone: typeof iterNone;

	/**
	* Tests whether every iterated value fails a test implemented by a predicate function.
	*
	* @param iterator - input iterator
	* @param predicate - predicate function
	* @param thisArg - execution context
	* @returns boolean indicating whether every iterated value fails a test implemented by a predicate function
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( v ) {
	*     return ( v <= 0 );
	* }
	*
	* var it = array2iterator( [ 1, 1, 1, 1, 1 ] );
	*
	* var bool = ns.iterNoneBy( it, predicate );
	* // returns true
	*/
	iterNoneBy: typeof iterNoneBy;

	/**
	* Returns the nth iterated value.
	*
	* ## Notes
	*
	* -   If `n` exceeds the total number of iterations, the function returns `undefined`.
	*
	* @param iterator - input iterator
	* @param n - iteration number
	* @returns nth iterated value
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 0, 0, 1, 0, 0 ] );
	*
	* var v = ns.iterNth( it, 3 );
	* // returns 1
	*/
	iterNth: typeof iterNth;

	/**
	* Returns an iterator pipeline.
	*
	* @param iterFcn0 - iterator function or an array of iterator functions
	* @param ...iterFcn - iterator function(s)
	* @throws must provide at least one iterator function
	* @returns iterator pipeline
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	* var iterSomeBy = require( './../../some-by' );
	* var iterHead = require( './../../head' );
	* var iterThunk = require( './../../pipeline-thunk' );
	*
	* function threshold( r ) {
	*     return ( r > 0.95 );
	* }
	*
	* var it1 = iterThunk( iterHead, 100 );
	* var it2 = iterThunk( iterSomeBy, 5, threshold );
	*
	* var p = ns.iterPipeline( it1, it2 );
	*
	* var bool = p( randu() );
	* // returns <boolean>
	*/
	iterPipeline: typeof iterPipeline;

	/**
	* Returns an iterator "thunk".
	*
	* @param iterFcn - iterator function
	* @param args - function arguments
	* @returns iterator "thunk"
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	* var iterSome = require( './../../some' );
	*
	* var it = array2iterator( [ 0, 0, 1, 1, 1 ] );
	*
	* var thunk = ns.iterThunk( iterSome, 3 );
	*
	* var bool = thunk( it );
	* // returns true
	*/
	iterThunk: typeof iterThunk;

	/**
	* Returns an iterator which skips the last value of a provided iterator.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param clbk - callback to invoke with the skipped value
	* @param thisArg - callback execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var iter = ns.iterPop( array2iterator( [ 1, 2 ] ) );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterPop: typeof iterPop;

	/**
	* Returns an iterator which appends additional values to the end of a provided iterator.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param items - items to append
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var iter = ns.iterPush( array2iterator( [ 1, 2 ] ), 3, 4 );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterPush: typeof iterPush;

	/**
	* Returns an iterator which rejects a provided iterator's values according to a predicate function.
	*
	* ## Notes
	*
	* -   When invoked, the `predicate` function is provided two arguments:
	*
	*     -   `value`: iterated value
	*     -   `index`: iteration index (zero-based)
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param predicate - predicate function
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( v ) {
	*     return ( v > 2 );
	* }
	*
	* var src = array2iterator( [ 1, 3, 2, 4 ] );
	* var iter = ns.iterReject( src, predicate );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterReject: typeof iterReject;

	/**
	* Returns an iterator which replicates each iterated value `n` times.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param n - number of times each iterated value is replicated
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var src = array2iterator( [ 1, 2, 3, 4 ] );
	* var iter = ns.iterReplicate( src, 2 );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 2
	*
	* // ...
	*/
	iterReplicate: typeof iterReplicate;

	/**
	* Returns an iterator which invokes a function for each iterated value.
	*
	* ## Notes
	*
	* -   The callback function is provided three arguments:
	*
	*     -   `value`: iterated value
	*     -   `index`: source iteration index (zero-based)
	*     -   `n`: iteration index (zero-based)
	*
	* -   The callback function is invoked **once** per iterated value of the provided iterator.
	*
	* -   The callback function **must** return an integer value. If the return value is less than or equal to zero, the returned iterator skips an iterated value and invokes the callback for the next iterated value of the provided iterator.
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param fcn - callback function which returns the number of times an iterated value should be replicated
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function fcn( v, i ) {
	*     return i + 1;
	* }
	*
	* var src = array2iterator( [ 1, 2, 3, 4 ] );
	* var iter = ns.iterReplicateBy( src, fcn );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 3
	*/
	iterReplicateBy: typeof iterReplicateBy;

	/**
	* Returns an iterator which skips the first value of a provided iterator.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param clbk - callback to invoke with the skipped value
	* @param thisArg - callback execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var iter = ns.iterShift( array2iterator( [ 1, 2 ] ) );
	*
	* var v = iter.next().value;
	* // returns 2
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterShift: typeof iterShift;

	/**
	* Returns an iterator which returns a subsequence of iterated values from a provided iterator.
	*
	* ## Notes
	*
	* -   If `end` exceeds the length of the provided iterator, the returned iterator returns the subsequence of iterated values starting from `begin` until the last iterated value of the provided iterator.
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param begin - start iteration index (inclusive; default: 0)
	* @param end - end iteration index (non-inclusive)
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* var iter = ns.iterSlice( randu(), 10, 20 );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	iterSlice: typeof iterSlice;

	/**
	* Tests whether at least `n` iterated values are truthy.
	*
	* @param iterator - input iterator
	* @param n - minimum number of truthy elements
	* @throws second argument must be a positive integer
	* @returns boolean indicating whether at least `n` iterated values are truthy
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it = array2iterator( [ 0, 0, 1, 1, 1 ] );
	*
	* var bool = ns.iterSome( it, 3 );
	* // returns true
	*/
	iterSome: typeof iterSome;

	/**
	* Tests whether at least `n` iterated values pass a test implemented by a predicate function.
	*
	* @param iterator - input iterator
	* @param n - number of successful values
	* @param predicate - predicate function
	* @param thisArg - execution context
	* @throws second argument must be a positive integer
	* @returns boolean indicating whether at least `n` iterated values pass a test implemented by a predicate function
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( v ) {
	*     return ( v > 0 );
	* }
	*
	* var it = array2iterator( [ 1, 1, 0, 0, 1 ] );
	*
	* var bool = ns.iterSomeBy( it, 3, predicate );
	* // returns true
	*/
	iterSomeBy: typeof iterSomeBy;

	/**
	* Returns an iterator which returns a sequence of numbers according to a provided increment.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param start - starting value (inclusive)
	* @param increment - increment
	* @param N - number of values (default: 1e308)
	* @returns iterator
	*
	* @example
	* var iter = ns.iterStep( 0, 2, 10 );
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* // ...
	*/
	iterStep: typeof iterStep;

	/**
	* Returns an iterator which steps by a specified amount.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param stride - stride
	* @param offset - offset
	* @param eager - boolean indicating whether to eagerly advance an input iterator when provided a non-zero `offset`
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
	*
	* var iter = ns.iterStrided( arr, 2, 1 );
	*
	* var r = iter.next().value;
	* // returns 1
	*
	* r = iter.next().value;
	* // returns 3
	*
	* r = iter.next().value;
	* // returns 5
	*
	* // ...
	*/
	iterStrided: typeof iterStrided;

	/**
	* Returns an iterator which steps according to a callback function.
	*
	* ## Notes
	*
	* -   When invoked, the callback function is provided four arguments:
	*
	*     -   `value`: iterated value
	*     -   `i`: input iteration index (zero-based)
	*     -   `n`: output (strided) iteration index (zero-based)
	*     -   `curr`: current stride
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param fcn - callback function which returns the next stride
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var arr = array2iterator( [ 0, 1, 2, 3, 4, 5, 6, 7 ] );
	*
	* function stride( v, i ) {
	*     return (i % 10) + 1;
	* }
	*
	* var iter = ns.iterStridedBy( arr, stride, null );
	*
	* var r = iter.next().value;
	* // returns 0
	*
	* r = iter.next().value;
	* // returns 1
	*
	* r = iter.next().value;
	* // returns 2
	*
	* // ...
	*/
	iterStridedBy: typeof iterStridedBy;

	/**
	* Fills an array-like object view with values returned from an iterator.
	*
	* @param iterator - source iterator
	* @param out - output array
	* @param begin - starting index (inclusive) (default: 0)
	* @param end - ending index (non-inclusive) (default: out.length)
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var iter = randu({
	*     'iter': 10
	* });
	*
	* var arr = ns.iterator2arrayview( iter, new Float64Array( 20 ), 5, 8 );
	* // returns <Float64Array>
	*/
	iterator2arrayview: typeof iterator2arrayview;

	/**
	* Fills an array-like object view from right to left with values returned from an iterator.
	*
	* @param iterator - source iterator
	* @param out - output array
	* @param begin - starting index (inclusive) (default: 0)
	* @param end - ending index (non-inclusive) (default: out.length)
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @throws third argument must be an integer (starting index) or a callback function
	* @throws fourth argument must be an integer (ending index) or a callback function
	* @returns output array
	*
	* @example
	* var randu = require( '@stdlib/random/iter/randu' );
	* var Float64Array = require( '@stdlib/array/float64' );
	*
	* var iter = randu({
	*     'iter': 10
	* });
	*
	* var arr = ns.iterator2arrayviewRight( iter, new Float64Array( 20 ), 5, 8 );
	* // returns <Float64Array>
	*/
	iterator2arrayviewRight: typeof iterator2arrayviewRight;

	/**
	* Returns an iterator which returns the union of two or more iterators.
	*
	* ## Notes
	*
	* -   Value "uniqueness" is determined according to strict equality.
	* -   A returned iterator internally buffers unique values and, thus, has `O(N)` memory requirements, where `N` is the total number of source iterator values.
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param iter0 - first iterator
	* @param iter1 - second iterator
	* @param iterN - subsequent iterators
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
	* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
	*
	* var iter = ns.iterUnion( it1, it2 );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 5
	*
	* v = iter.next().value;
	* // returns 3
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterUnion: typeof iterUnion;

	/**
	* Returns an iterator which returns unique values.
	*
	* ## Notes
	*
	* -   Value "uniqueness" is determined according to strict equality.
	* -   A returned iterator internally buffers unique values and, thus, has `O(N)` memory requirements.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var iter = ns.iterUnique( array2iterator( [ 1, 2, 1, 2, 4 ] ) );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterUnique: typeof iterUnique;

	/**
	* Returns an iterator which returns unique values according to a predicate function.
	*
	* ## Notes
	*
	* -   A returned iterator internally buffers unique values and, thus, has `O(N)` memory requirements.
	* -   A predicate function is invoked for each iterated value against each value in an internal buffer consisting of previously identified unique values. Thus, as the number of unique values grows, so, too, does the number of predicate function invocations per iterated value.
	* -   An iterated value is considered "unique" if the predicate function returns truthy values for all comparisons of the iterated value with each value in the internal buffer.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( a, b ) {
	*     return ( a !== b );
	* }
	*
	* var iter = ns.iterUniqueBy( array2iterator( [ 1, 2, 1, 2, 4 ] ), predicate );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterUniqueBy: typeof iterUniqueBy;

	/**
	* Returns an iterator which returns unique values according to a hash function.
	*
	* ## Notes
	*
	* -   A returned iterator internally buffers unique hashes and, thus, has `O(N)` memory requirements.
	* -   An iterated value is considered "unique" if the hash function returns a unique hash value for that iterated value. Beware that this **may** result in unexpected behavior. Namely, only the first iterated value mapping to a particular hash function result is returned, even if subsequent values, while mapping to the same hash, are different. Accordingly, iteration order **does** matter.
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param hashFcn - hash function
	* @param thisArg - hash function execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function hashFcn( v ) {
	*     return v.toString();
	* }
	*
	* var iter = ns.iterUniqueByHash( array2iterator( [ 1, 2, 1, 2, 4 ] ), hashFcn );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 4
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterUniqueByHash: typeof iterUniqueByHash;

	/**
	* Returns an iterator which returns numbers incremented by `1`.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
	*
	* @param start - starting value (inclusive)
	* @param stop - stopping value
	* @returns iterator
	*
	* @example
	* var iter = ns.iterUnitspace( 0, 99 );
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* // ...
	*/
	iterUnitspace: typeof iterUnitspace;

	/**
	* Returns an iterator which prepends values to the beginning of a provided iterator.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param items - items to prepend
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* var iter = ns.iterUnshift( array2iterator( [ 1, 2 ] ), 3, 4 );
	*
	* var v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	iterUnshift: typeof iterUnshift;

	/**
	* Returns an iterator which invokes a function for each iterated value **before** returning the iterated value until either a predicate function returns `false` or the iterator has iterated over all values.
	*
	* ## Notes
	*
	* -   When invoked, both the `predicate` and callback functions are provided two arguments:
	*
	*     -   **value**: iterated value
	*     -   **index**: iteration index (zero-based)
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param predicate - function which indicates whether to continue iterating
	* @param fcn - callback function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var array2iterator = require( '@stdlib/array/to-iterator' );
	*
	* function predicate( v ) {
	*     return v < 3;
	* }
	*
	* function assert( v, i ) {
	*     if ( i > 1 ) {
	*         throw new Error( 'unexpected error' );
	*     }
	* }
	*
	* var it = ns.whileEach( array2iterator( [ 1, 2, 3, 4 ] ), predicate, assert );
	* // returns {}
	*
	* var r = it.next().value;
	* // returns 1
	*
	* r = it.next().value;
	* // returns 2
	*
	* r = it.next().value;
	* // undefined
	*
	* // ...
	*/
	whileEach: typeof whileEach;
}

/**
* Standard iterator utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
