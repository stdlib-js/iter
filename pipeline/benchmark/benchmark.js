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

var bench = require( '@stdlib/bench' );
var isFunction = require( '@stdlib/assert/is-function' );
var isBoolean = require( '@stdlib/assert/is-boolean' ).isPrimitive;
var randu = require( '@stdlib/random/iter/randu' );
var iterHead = require( './../../head' );
var iterSomeBy = require( './../../some-by' );
var iterThunk = require( './../../pipeline-thunk' );
var pkg = require( './../package.json' ).name;
var iterPipeline = require( './../lib' );


// MAIN //

bench( pkg+'::arguments', function benchmark( b ) {
	var fcn;
	var it1;
	var it2;
	var i;

	it1 = iterThunk( iterHead, 10 );
	it2 = iterThunk( iterSomeBy, 5, threshold );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		fcn = iterPipeline( it1, it2 );
		if ( typeof fcn !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( fcn ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function threshold( r ) {
		return ( r > 0.95 );
	}
});

bench( pkg+'::array', function benchmark( b ) {
	var args;
	var fcn;
	var it1;
	var it2;
	var i;

	it1 = iterThunk( iterHead, 10 );
	it2 = iterThunk( iterSomeBy, 5, threshold );
	args = [ it1, it2 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		fcn = iterPipeline( args );
		if ( typeof fcn !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( fcn ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function threshold( r ) {
		return ( r > 0.95 );
	}
});

bench( pkg+'::pipeline_throughput', function benchmark( b ) {
	var bool;
	var fcn;
	var it0;
	var it1;
	var it2;
	var i;

	it0 = randu(); // infinite iterator which can be reused for each run
	it1 = iterThunk( iterHead, 10 );
	it2 = iterThunk( iterSomeBy, 5, threshold );
	fcn = iterPipeline( it1, it2 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = fcn( it0 );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !isBoolean( bool ) ) {
		b.fail( 'should return a boolean' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function threshold( r ) {
		return ( r > 0.95 );
	}
});
