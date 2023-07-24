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

// TypeScript Version: 2.0

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Returns an iterator which returns evenly spaced numbers according to a provided increment.
*
* ## Notes
*
* -   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
*
* @param start - starting value (inclusive)
* @param stop - stopping value (exclusive)
* @param increment - increment (default: 1)
* @returns iterator
*
* @example
* var iter = iterIncrspace( 0, 100, 2 );
*
* var v = iter.next().value;
* // returns 0
*
* v = iter.next().value;
* // returns 2
*
* v = iter.next().value;
* // returns 4
*
* // ...
*/
declare function iterIncrspace( start: number, stop: number, increment?: number ): Iterator; // tslint:disable-line: max-length


// EXPORTS //

export = iterIncrspace;
