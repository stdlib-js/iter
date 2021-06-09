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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name iterAdvance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/advance}
*/
setReadOnly( ns, 'iterAdvance', require( '@stdlib/iter/advance' ) );

/**
* @name iterAny
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/any}
*/
setReadOnly( ns, 'iterAny', require( '@stdlib/iter/any' ) );

/**
* @name iterAnyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/any-by}
*/
setReadOnly( ns, 'iterAnyBy', require( '@stdlib/iter/any-by' ) );

/**
* @name iterConcat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/concat}
*/
setReadOnly( ns, 'iterConcat', require( '@stdlib/iter/concat' ) );

/**
* @name iterConstant
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/constant}
*/
setReadOnly( ns, 'iterConstant', require( '@stdlib/iter/constant' ) );

/**
* @name iterCounter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/counter}
*/
setReadOnly( ns, 'iterCounter', require( '@stdlib/iter/counter' ) );

/**
* @name iterDatespace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/datespace}
*/
setReadOnly( ns, 'iterDatespace', require( '@stdlib/iter/datespace' ) );

/**
* @name iterDedupe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/dedupe}
*/
setReadOnly( ns, 'iterDedupe', require( '@stdlib/iter/dedupe' ) );

/**
* @name iterDedupeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/dedupe-by}
*/
setReadOnly( ns, 'iterDedupeBy', require( '@stdlib/iter/dedupe-by' ) );

/**
* @name iterEmpty
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/empty}
*/
setReadOnly( ns, 'iterEmpty', require( '@stdlib/iter/empty' ) );

/**
* @name iterEvery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/every}
*/
setReadOnly( ns, 'iterEvery', require( '@stdlib/iter/every' ) );

/**
* @name iterEveryBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/every-by}
*/
setReadOnly( ns, 'iterEveryBy', require( '@stdlib/iter/every-by' ) );

/**
* @name iterFill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/fill}
*/
setReadOnly( ns, 'iterFill', require( '@stdlib/iter/fill' ) );

/**
* @name iterFilter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/filter}
*/
setReadOnly( ns, 'iterFilter', require( '@stdlib/iter/filter' ) );

/**
* @name iterFilterMap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/filter-map}
*/
setReadOnly( ns, 'iterFilterMap', require( '@stdlib/iter/filter-map' ) );

/**
* @name iterFirst
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/first}
*/
setReadOnly( ns, 'iterFirst', require( '@stdlib/iter/first' ) );

/**
* @name iterFlow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/flow}
*/
setReadOnly( ns, 'iterFlow', require( '@stdlib/iter/flow' ) );

/**
* @name iterForEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/for-each}
*/
setReadOnly( ns, 'iterForEach', require( '@stdlib/iter/for-each' ) );

/**
* @name iterHead
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/head}
*/
setReadOnly( ns, 'iterHead', require( '@stdlib/iter/head' ) );

/**
* @name iterIncrspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/incrspace}
*/
setReadOnly( ns, 'iterIncrspace', require( '@stdlib/iter/incrspace' ) );

/**
* @name iterIntersection
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/intersection}
*/
setReadOnly( ns, 'iterIntersection', require( '@stdlib/iter/intersection' ) );

/**
* @name iterIntersectionByHash
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/intersection-by-hash}
*/
setReadOnly( ns, 'iterIntersectionByHash', require( '@stdlib/iter/intersection-by-hash' ) );

/**
* @name iterLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/last}
*/
setReadOnly( ns, 'iterLast', require( '@stdlib/iter/last' ) );

/**
* @name iterLength
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/length}
*/
setReadOnly( ns, 'iterLength', require( '@stdlib/iter/length' ) );

/**
* @name iterLinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/linspace}
*/
setReadOnly( ns, 'iterLinspace', require( '@stdlib/iter/linspace' ) );

/**
* @name iterLogspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/logspace}
*/
setReadOnly( ns, 'iterLogspace', require( '@stdlib/iter/logspace' ) );

/**
* @name iterMap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/map}
*/
setReadOnly( ns, 'iterMap', require( '@stdlib/iter/map' ) );

/**
* @name iterMapN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/mapn}
*/
setReadOnly( ns, 'iterMapN', require( '@stdlib/iter/mapn' ) );

/**
* @name iterNone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/none}
*/
setReadOnly( ns, 'iterNone', require( '@stdlib/iter/none' ) );

/**
* @name iterNoneBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/none-by}
*/
setReadOnly( ns, 'iterNoneBy', require( '@stdlib/iter/none-by' ) );

/**
* @name iterNth
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/nth}
*/
setReadOnly( ns, 'iterNth', require( '@stdlib/iter/nth' ) );

/**
* @name iterPipeline
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/pipeline}
*/
setReadOnly( ns, 'iterPipeline', require( '@stdlib/iter/pipeline' ) );

/**
* @name iterThunk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/pipeline-thunk}
*/
setReadOnly( ns, 'iterThunk', require( '@stdlib/iter/pipeline-thunk' ) );

/**
* @name iterPop
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/pop}
*/
setReadOnly( ns, 'iterPop', require( '@stdlib/iter/pop' ) );

/**
* @name iterPush
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/push}
*/
setReadOnly( ns, 'iterPush', require( '@stdlib/iter/push' ) );

/**
* @name iterReject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/reject}
*/
setReadOnly( ns, 'iterReject', require( '@stdlib/iter/reject' ) );

/**
* @name iterReplicate
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/replicate}
*/
setReadOnly( ns, 'iterReplicate', require( '@stdlib/iter/replicate' ) );

/**
* @name iterReplicateBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/replicate-by}
*/
setReadOnly( ns, 'iterReplicateBy', require( '@stdlib/iter/replicate-by' ) );

/**
* @name iterShift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/shift}
*/
setReadOnly( ns, 'iterShift', require( '@stdlib/iter/shift' ) );

/**
* @name iterSlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/slice}
*/
setReadOnly( ns, 'iterSlice', require( '@stdlib/iter/slice' ) );

/**
* @name iterSome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/some}
*/
setReadOnly( ns, 'iterSome', require( '@stdlib/iter/some' ) );

/**
* @name iterSomeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/some-by}
*/
setReadOnly( ns, 'iterSomeBy', require( '@stdlib/iter/some-by' ) );

/**
* @name iterStep
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/step}
*/
setReadOnly( ns, 'iterStep', require( '@stdlib/iter/step' ) );

/**
* @name iterStrided
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/strided}
*/
setReadOnly( ns, 'iterStrided', require( '@stdlib/iter/strided' ) );

/**
* @name iterStridedBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/strided-by}
*/
setReadOnly( ns, 'iterStridedBy', require( '@stdlib/iter/strided-by' ) );

/**
* @name iterator2arrayview
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/to-array-view}
*/
setReadOnly( ns, 'iterator2arrayview', require( '@stdlib/iter/to-array-view' ) );

/**
* @name iterator2arrayviewRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/to-array-view-right}
*/
setReadOnly( ns, 'iterator2arrayviewRight', require( '@stdlib/iter/to-array-view-right' ) );

/**
* @name iterUnion
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/union}
*/
setReadOnly( ns, 'iterUnion', require( '@stdlib/iter/union' ) );

/**
* @name iterUnique
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unique}
*/
setReadOnly( ns, 'iterUnique', require( '@stdlib/iter/unique' ) );

/**
* @name iterUniqueBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unique-by}
*/
setReadOnly( ns, 'iterUniqueBy', require( '@stdlib/iter/unique-by' ) );

/**
* @name iterUniqueByHash
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unique-by-hash}
*/
setReadOnly( ns, 'iterUniqueByHash', require( '@stdlib/iter/unique-by-hash' ) );

/**
* @name iterUnitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unitspace}
*/
setReadOnly( ns, 'iterUnitspace', require( '@stdlib/iter/unitspace' ) );

/**
* @name iterUnshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unshift}
*/
setReadOnly( ns, 'iterUnshift', require( '@stdlib/iter/unshift' ) );


// EXPORTS //

module.exports = ns;
