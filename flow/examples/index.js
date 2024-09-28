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

var array2iterator = require( '@stdlib/array/to-iterator' );
var iterHead = require( './../../head' );
var iterSome = require( './../../some' );
var iterFlow = require( './../lib' );

// Create a "fluent" interface:
var FluentIterator = iterFlow({
	'head': iterHead,
	'some': iterSome
});

// Create a source iterator:
var arr = array2iterator( [ 0, 0, 1, 1, 1, 0, 0, 1, 0, 1 ] );

// Create a new iterator:
var it = new FluentIterator( arr );

var bool = it.head( 5 ).some( 3 );
// returns true

console.log( bool );

// Create another source iterator:
arr = array2iterator( [ 0, 0, 1, 0, 1, 0, 0, 1, 0, 1 ] );

// Create a new iterator:
it = new FluentIterator( arr );

bool = it.head( 5 ).some( 3 );
// returns false

console.log( bool );
