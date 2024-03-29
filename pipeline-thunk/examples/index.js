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

/* eslint-disable function-paren-newline, function-call-argument-newline */

'use strict';

var randu = require( '@stdlib/random/iter/randu' );
var iterHead = require( './../../head' );
var iterMap = require( './../../map' );
var iterSome = require( './../../some' );
var iterPipeline = require( './../../pipeline' );
var iterThunk = require( './../lib' );

function threshold( r ) {
	return ( r > 0.95 );
}

// Create a pipeline which tests whether at least 5% of values exceed a threshold:
var p = iterPipeline(
	// Apply a threshold to iterated values:
	iterThunk( iterMap, threshold ),

	// Limit the sequence to 100 values:
	iterThunk( iterHead, 100 ),

	// Test whether at least 5 values exceed the threshold:
	iterThunk( iterSome, 5 )
);

// Define the number of random number sequences to analyze:
var N = 100;

// Initialize a counter for sequences satisfying the 5% threshold:
var count = 0;

// Perform analysis...
var bool;
var i;
for ( i = 0; i < N; i++ ) {
	bool = p( randu() );
	if ( bool ) {
		count += 1;
	}
	console.log( bool );
}
console.log( '%d of %d', count, N );
