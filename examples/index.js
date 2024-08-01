/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var objectKeys = require( '@stdlib/utils/keys' );
var uncapitalize = require( '@stdlib/string/uncapitalize' );
var replace = require( '@stdlib/string/replace' );
var contains = require( '@stdlib/assert/contains' );
var randu = require( '@stdlib/random/iter/randu' );
var ns = require( './../lib' );

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
