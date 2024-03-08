/*
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

import iterConstant = require( './index' );


// TESTS //

// The function returns an iterator...
{
	iterConstant( 3.14 ); // $ExpectType Iterator
	iterConstant( 3.14, {} ); // $ExpectType Iterator
	iterConstant( 3.14, { 'iter': 10 } ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	iterConstant( 3.14, null ); // $ExpectError
}

// The compiler throws an error if the function is provided an `iter` option which is not a number...
{
	iterConstant( 3.14, { 'iter': '5' } ); // $ExpectError
	iterConstant( 3.14, { 'iter': true } ); // $ExpectError
	iterConstant( 3.14, { 'iter': false } ); // $ExpectError
	iterConstant( 3.14, { 'iter': null } ); // $ExpectError
	iterConstant( 3.14, { 'iter': [] } ); // $ExpectError
	iterConstant( 3.14, { 'iter': {} } ); // $ExpectError
	iterConstant( 3.14, { 'iter': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterConstant(); // $ExpectError
}
