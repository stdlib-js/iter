/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Iterator, IteratorResult } from '@stdlib/types/iter';
import iterCuNone = require( './index' );

/**
* Implements the iterator protocol `next` method.
*
* @returns iterator protocol-compliant object
*/
function next(): IteratorResult {
	return {
		'value': true,
		'done': false
	};
}

/**
* Returns an iterator protocol-compliant object.
*
* @returns iterator protocol-compliant object
*/
function iterator(): Iterator {
	return {
		'next': next
	};
}


// TESTS //

// The function returns an iterator...
{
	iterCuNone( iterator() ); // $ExpectType Iterator
}

// The compiler throws an error if the function is provided a value other than an iterator protocol-compliant object...
{
	iterCuNone( '5' ); // $ExpectError
	iterCuNone( 5 ); // $ExpectError
	iterCuNone( true ); // $ExpectError
	iterCuNone( false ); // $ExpectError
	iterCuNone( null ); // $ExpectError
	iterCuNone( undefined ); // $ExpectError
	iterCuNone( [] ); // $ExpectError
	iterCuNone( {} ); // $ExpectError
	iterCuNone( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	iterCuNone(); // $ExpectError
}
