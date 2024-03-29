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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var array2iterator = require( '@stdlib/array/to-iterator' );
var randu = require( '@stdlib/random/iter/randu' );
var iterHead = require( './../../head' );
var iterSome = require( './../../some' );
var iterFlow = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterFlow, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterFlow( value );
		};
	}
});

tape( 'the function throws an error if provided an object which contains any other than functions', function test( t ) {
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
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var obj = {
				'head': iterHead,
				'some': iterSome,
				'value': value
			};
			iterFlow( obj );
		};
	}
});

tape( 'the function returns a constructor which throws an error if provided an iterator (new)', function test( t ) {
	var Iterator;
	var values;
	var i;

	Iterator = iterFlow( {} );

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
			var it = new Iterator( value );
			if ( it ) {
				t.ok( false, 'should not reach this line' );
			}
		};
	}
});

tape( 'the function returns a constructor which throws an error if provided an iterator (no new)', function test( t ) {
	var iterator;
	var values;
	var i;

	iterator = iterFlow( {} );

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
			iterator( value );
		};
	}
});

tape( 'the function returns a constructor which returns an iterator protocol-compliant object', function test( t ) {
	var Iterator;
	var it;
	var r;
	var i;

	Iterator = iterFlow( {} );

	it = new Iterator( randu() );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns a constructor which returns an iterator having a fluent interface (iterator result)', function test( t ) {
	var Iterator;
	var values;
	var src;
	var it1;
	var it2;
	var v;
	var i;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it1 = new Iterator( randu() );
	t.equal( typeof it1.head, 'function', 'has method' );
	t.equal( typeof it1.some, 'function', 'has method' );

	values = [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ];
	src = array2iterator( values );
	it1 = new Iterator( src );
	it2 = it1.head( 5 );

	for ( i = 0; i < 5; i++ ) {
		v = it2.next();
		t.equal( v.value, values[ i ], 'returns expected value' );
		t.equal( v.done, false, 'returns expected value' );
	}
	v = it2.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns a constructor which returns an iterator having a fluent interface (non-iterator result)', function test( t ) {
	var Iterator;
	var bool;
	var src;
	var it;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );
	t.equal( typeof it.head, 'function', 'has method' );
	t.equal( typeof it.some, 'function', 'has method' );

	src = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );
	it = new Iterator( src );
	bool = it.head( 5 ).some( 3 );
	t.equal( bool, true, 'returns expected value' );

	src = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 1 ] );
	it = new Iterator( src );
	bool = it.head( 5 ).some( 3 );
	t.equal( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns a constructor which returns an iterator which throws an error if an iterator method is invoked with an invalid `this` context', function test( t ) {
	var Iterator;
	var values;
	var it;
	var i;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error for '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			it.head.call( value, 10 );
		};
	}
});

tape( 'the function returns a constructor which returns an iterator having a `next` which throws an error if invoked with an invalid `this` context', function test( t ) {
	var Iterator;
	var values;
	var it;
	var i;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error for '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			it.next.call( value );
		};
	}
});

tape( 'the function returns a constructor which returns an iterator having a `return` method for closing an iterator (no argument)', function test( t ) {
	var Iterator;
	var it;
	var r;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );

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
});

tape( 'the function returns a constructor which returns an iterator having a `return` method for closing an iterator (argument)', function test( t ) {
	var Iterator;
	var it;
	var r;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );

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
});

tape( 'the function returns a constructor which returns an iterator having a `return` which throws an error if invoked with an invalid `this` context (no argument)', function test( t ) {
	var Iterator;
	var values;
	var it;
	var i;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error for '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			it.return.call( value );
		};
	}
});

tape( 'the function returns a constructor which returns an iterator having a `return` which throws an error if invoked with an invalid `this` context (argument)', function test( t ) {
	var Iterator;
	var values;
	var it;
	var i;

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error for '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			it.return.call( value, 'beep' );
		};
	}
});

tape( 'if an environment supports `Symbol.iterator`, the function returns a constructor which returns an iterator which is iterable', function test( t ) {
	var iterFlow;
	var Iterator;
	var it1;
	var it2;
	var r;
	var i;

	iterFlow = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it1 = new Iterator( randu() );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		r = it2.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the function returns a constructor which returns an iterator which is not "iterable"', function test( t ) {
	var iterFlow;
	var Iterator;
	var it;

	iterFlow = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	Iterator = iterFlow({
		'head': iterHead,
		'some': iterSome
	});

	it = new Iterator( randu() );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
