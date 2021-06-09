/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var array2iterator = require( '@stdlib/array/to-iterator' );
var iterLength = require( '@stdlib/iter/length' );
var iterAdvance = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterAdvance, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an iterator', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterAdvance( value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterAdvance( array2iterator( [ 1, 2, 3, 4 ] ), value );
		};
	}
});

tape( 'the function returns a provided iterator', function test( t ) {
	var arr;
	var it;

	arr = array2iterator( [ 1, 2, 3, 4 ] );
	it = iterAdvance( arr );

	t.strictEqual( it, arr, 'returns expected value' );
	t.end();
});

tape( 'the function returns a provided iterator (iterations)', function test( t ) {
	var arr;
	var it;

	arr = array2iterator( [ 1, 2, 3, 4 ] );
	it = iterAdvance( arr, 2 );

	t.strictEqual( it, arr, 'returns expected value' );
	t.end();
});

tape( 'the function consumes an entire iterator if the number of iterations is not specified', function test( t ) {
	var arr;
	var it;
	var v;

	arr = array2iterator( [ 1, 2, 3, 4 ] );
	it = iterAdvance( arr );

	t.strictEqual( it, arr, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'if the number of iterations is greater than the iterator length, the function consumes an entire iterator', function test( t ) {
	var arr;
	var it;
	var v;

	arr = array2iterator( [ 1, 2, 3, 4 ] );
	it = iterAdvance( arr, 10 );

	t.strictEqual( it, arr, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'if provided an "empty" iterator, the function returns an empty iterator', function test( t ) {
	var arr;
	var it;

	arr = array2iterator( [] );
	it = iterAdvance( arr );

	t.strictEqual( it, arr, 'returns expected value' );
	t.strictEqual( iterLength( it ), 0, 'returns expected value' );
	t.end();
});

tape( 'the function eagerly advances an input iterator (n={1,1})', function test( t ) {
	var arr;
	var it1;
	var it2;
	var v;

	arr = array2iterator( [ 1, 2, 3, 4 ] );
	it1 = iterAdvance( arr, 1 );

	t.strictEqual( it1, arr, 'returns expected value' );

	v = it1.next();
	t.strictEqual( v.value, 2, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	it2 = iterAdvance( arr, 1 );

	t.strictEqual( it2, arr, 'returns expected value' );

	v = it2.next();
	t.strictEqual( v.value, 4, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it2.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function eagerly advances an input iterator (n={0,2})', function test( t ) {
	var arr;
	var it1;
	var it2;
	var v;

	arr = array2iterator( [ 1, 2, 3, 4 ] );
	it1 = iterAdvance( arr, 0 );

	t.strictEqual( it1, arr, 'returns expected value' );

	v = it1.next();
	t.strictEqual( v.value, 1, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	it2 = iterAdvance( arr, 2 );

	t.strictEqual( it2, arr, 'returns expected value' );

	v = it2.next();
	t.strictEqual( v.value, 4, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it2.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function eagerly advances an input iterator (n={3,0})', function test( t ) {
	var arr;
	var it1;
	var it2;
	var v;

	arr = array2iterator( [ 1, 2, 3, 4 ] );
	it1 = iterAdvance( arr, 3 );

	t.strictEqual( it1, arr, 'returns expected value' );

	v = it1.next();
	t.strictEqual( v.value, 4, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	it2 = iterAdvance( arr, 0 );

	t.strictEqual( it2, arr, 'returns expected value' );

	v = it2.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});
