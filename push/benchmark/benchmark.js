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
var randu = require( '@stdlib/random/iter/randu' );
var iterEmpty = require( './../../empty' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isIteratorLike = require( '@stdlib/assert/is-iterator-like' );
var pkg = require( './../package.json' ).name;
var iterPush = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var iter;
	var it;
	var i;

	it = iterEmpty();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		iter = iterPush( it, i );
		if ( typeof iter !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isIteratorLike( iter ) ) {
		b.fail( 'should return an iterator protocol-compliant object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::iteration', function benchmark( b ) {
	var args;
	var iter;
	var it;
	var z;
	var i;

	it = randu({
		'iter': ( b.iterations > 100 ) ? b.iterations-100 : b.iterations
	});
	args = [ it ];
	for ( i = 0; i < 100; i++ ) {
		args.push( i );
	}
	iter = iterPush.apply( null, args );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		z = iter.next().value;
		if ( isnan( z ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( z ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
