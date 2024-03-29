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
var proxyquire = require( 'proxyquire' );
var randu = require( '@stdlib/random/iter/randu' );
var array2iterator = require( '@stdlib/array/to-iterator' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var iterCounter = require( './../../counter' );
var iterDedupeBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterDedupeBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterDedupeBy( value, fcn );
		};
	}

	function fcn( v ) {
		return v;
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (limit)', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterDedupeBy( value, 2, fcn );
		};
	}

	function fcn( v ) {
		return v;
	}
});

tape( 'the function throws an error if provided a `limit` argument which is not a positive integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterDedupeBy( randu(), value, fcn );
		};
	}

	function fcn( v ) {
		return v;
	}
});

tape( 'the function throws an error if provided a last argument which is not a function', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterDedupeBy( randu(), value );
		};
	}
});

tape( 'the function throws an error if provided a last argument which is not a function (limit)', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterDedupeBy( randu(), 2, value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (infinite iterator)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterDedupeBy( iterCounter( randu() ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [];
	actual = [];
	for ( i = 0; i < 100; i++ ) {
		actual.push( it.next() );
		expected.push({
			'value': i + 1,
			'done': false
		});
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the function returns an iterator protocol-compliant object which removes consecutive iterated values which resolve to the same value (finite iterator)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 1, 2, 3, 3, 3, 3, 4, 4, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDedupeBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the function returns an iterator protocol-compliant object which removes consecutive iterated values which resolve to the same value (finite iterator; last unique)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 1, 2, 3, 3, 3, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDedupeBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the function returns an iterator protocol-compliant object which removes consecutive iterated values which resolve to the same value (finite iterator; last two unique)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 1, 2, 3, 3, 3, 3, 4, 5 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 5,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDedupeBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the function supports specifying the number of allowed consecutive iterated values which resolve to the same value (finite iterator)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 1, 2, 3, 3, 3, 3, 4, 4, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDedupeBy( array2iterator( values ), 2, fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the function supports specifying the number of allowed consecutive iterated values which resolve to the same value (finite iterator; last unique)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 1, 2, 3, 3, 3, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDedupeBy( array2iterator( values ), 2, fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the function invokes a provided callback with five arguments', function test( t ) {
	var expected1;
	var expected2;
	var actual1;
	var actual2;
	var values;
	var it;
	var x;
	var y;
	var i;

	values = [ 1, 1, 2, 3, 3, 3, 3, 4, 4, 4 ];
	expected1 = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];
	expected2 = [
		[ 1, void 0, void 0, 0, NaN ],
		[ 1, 1, 1, 1, 1 ],
		[ 2, 1, 1, 2, 1 ],
		[ 3, 2, 2, 3, 2 ],
		[ 3, 3, 3, 4, 3 ],
		[ 3, 3, 3, 5, 3 ],
		[ 3, 3, 3, 6, 3 ],
		[ 4, 3, 3, 7, 3 ],
		[ 4, 4, 4, 8, 4 ],
		[ 4, 4, 4, 9, 4 ]
	];

	it = iterDedupeBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual1 = [];
	actual2 = [];
	for ( i = 0; i < expected1.length; i++ ) {
		actual1.push( it.next() );
	}
	t.deepEqual( actual1, expected1, 'returns expected values' );

	for ( i = 0; i < expected2.length; i++ ) {
		x = actual2[ i ];
		y = expected2[ i ];
		t.equal( x[ 0 ], y[ 0 ], 'returns expected value' );
		t.equal( x[ 1 ], y[ 1 ], 'returns expected value' );
		t.equal( x[ 2 ], y[ 2 ], 'returns expected value' );
		t.equal( x[ 3 ], y[ 3 ], 'returns expected value' );
		if ( y[ 4 ] !== y[ 4 ] ) {
			t.notEqual( x[ 4 ], x[ 4 ], 'returns expected value' );
		}
	}
	t.end();

	function fcn( curr, sprev, dprev, i, acc ) {
		actual2.push( [ curr, sprev, dprev, i, acc ] );
		return curr;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterDedupeBy( randu(), fcn );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterDedupeBy( randu(), fcn );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable', function test( t ) {
	var iterDedupeBy;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterDedupeBy = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterDedupeBy( rand, fcn );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return randu( opts );
	}

	function fcn( v ) {
		return v;
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterDedupeBy;
	var it;

	iterDedupeBy = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterDedupeBy( randu(), fcn );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterDedupeBy;
	var rand;
	var it;

	iterDedupeBy = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterDedupeBy( rand, fcn );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function fcn( v ) {
		return v;
	}
});
