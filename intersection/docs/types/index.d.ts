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
* Returns an iterator which returns the intersection of two or more iterators.
*
* ## Notes
*
* -   Value "uniqueness" is determined according to strict equality.
* -   A returned iterator internally buffers unique values and, thus, has `O(N)` memory requirements, where `N` is the length of the first iterator.
* -   Do **not** provide iterators having infinite length.
* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
*
* @param iter0 - first iterator
* @param iter1 - second iterator
* @param iterN - subsequent iterators
* @returns iterator
*
* @example
* var array2iterator = require( `@stdlib/array/to-iterator` );
*
* var it1 = array2iterator( [ 1, 2, 1, 2, 4 ] );
* var it2 = array2iterator( [ 1, 2, 5, 2, 3 ] );
*
* var iter = iterIntersection( it1, it2 );
*
* var v = iter.next().value;
* // returns 1
*
* v = iter.next().value;
* // returns 2
*
* var bool = iter.next().done;
* // returns true
*/
declare function iterIntersection( iter0: Iterator, iter1: Iterator, ...iterN: Array<Iterator> ): Iterator; // tslint:disable-line:max-line-length


// EXPORTS //

export = iterIntersection;
