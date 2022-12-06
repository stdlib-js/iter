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

var MILLISECONDS_IN_DAY = require( '@stdlib/constants/time/milliseconds-in-day' );
var HOURS_IN_DAY = require( '@stdlib/constants/time/hours-in-day' );
var iterDatespace = require( './../lib' );

// Create an iterator which returns a Date object for each hour in the next 24 hours:
var start = new Date();
var end = new Date( start.getTime()+MILLISECONDS_IN_DAY );
var it = iterDatespace( start, end, HOURS_IN_DAY+1 );

// Perform manual iteration...
var v;
while ( true ) {
	v = it.next();
	if ( v.done ) {
		break;
	}
	console.log( v.value );
}
