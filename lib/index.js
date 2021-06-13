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
setReadOnly( ns, 'iterAdvance', require( './../advance' ) );

/**
* @name iterAny
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/any}
*/
setReadOnly( ns, 'iterAny', require( './../any' ) );

/**
* @name iterAnyBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/any-by}
*/
setReadOnly( ns, 'iterAnyBy', require( './../any-by' ) );

/**
* @name iterConcat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/concat}
*/
setReadOnly( ns, 'iterConcat', require( './../concat' ) );

/**
* @name iterConstant
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/constant}
*/
setReadOnly( ns, 'iterConstant', require( './../constant' ) );

/**
* @name iterCounter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/counter}
*/
setReadOnly( ns, 'iterCounter', require( './../counter' ) );

/**
* @name iterDatespace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/datespace}
*/
setReadOnly( ns, 'iterDatespace', require( './../datespace' ) );

/**
* @name iterDedupe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/dedupe}
*/
setReadOnly( ns, 'iterDedupe', require( './../dedupe' ) );

/**
* @name iterDedupeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/dedupe-by}
*/
setReadOnly( ns, 'iterDedupeBy', require( './../dedupe-by' ) );

/**
* @name iterEmpty
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/empty}
*/
setReadOnly( ns, 'iterEmpty', require( './../empty' ) );

/**
* @name iterEvery
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/every}
*/
setReadOnly( ns, 'iterEvery', require( './../every' ) );

/**
* @name iterEveryBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/every-by}
*/
setReadOnly( ns, 'iterEveryBy', require( './../every-by' ) );

/**
* @name iterFill
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/fill}
*/
setReadOnly( ns, 'iterFill', require( './../fill' ) );

/**
* @name iterFilter
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/filter}
*/
setReadOnly( ns, 'iterFilter', require( './../filter' ) );

/**
* @name iterFilterMap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/filter-map}
*/
setReadOnly( ns, 'iterFilterMap', require( './../filter-map' ) );

/**
* @name iterFirst
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/first}
*/
setReadOnly( ns, 'iterFirst', require( './../first' ) );

/**
* @name iterFlow
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/flow}
*/
setReadOnly( ns, 'iterFlow', require( './../flow' ) );

/**
* @name iterForEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/for-each}
*/
setReadOnly( ns, 'iterForEach', require( './../for-each' ) );

/**
* @name iterHead
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/head}
*/
setReadOnly( ns, 'iterHead', require( './../head' ) );

/**
* @name iterIncrspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/incrspace}
*/
setReadOnly( ns, 'iterIncrspace', require( './../incrspace' ) );

/**
* @name iterIntersection
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/intersection}
*/
setReadOnly( ns, 'iterIntersection', require( './../intersection' ) );

/**
* @name iterIntersectionByHash
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/intersection-by-hash}
*/
setReadOnly( ns, 'iterIntersectionByHash', require( './../intersection-by-hash' ) );

/**
* @name iterLast
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/last}
*/
setReadOnly( ns, 'iterLast', require( './../last' ) );

/**
* @name iterLength
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/length}
*/
setReadOnly( ns, 'iterLength', require( './../length' ) );

/**
* @name iterLinspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/linspace}
*/
setReadOnly( ns, 'iterLinspace', require( './../linspace' ) );

/**
* @name iterLogspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/logspace}
*/
setReadOnly( ns, 'iterLogspace', require( './../logspace' ) );

/**
* @name iterMap
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/map}
*/
setReadOnly( ns, 'iterMap', require( './../map' ) );

/**
* @name iterMapN
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/mapn}
*/
setReadOnly( ns, 'iterMapN', require( './../mapn' ) );

/**
* @name iterNone
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/none}
*/
setReadOnly( ns, 'iterNone', require( './../none' ) );

/**
* @name iterNoneBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/none-by}
*/
setReadOnly( ns, 'iterNoneBy', require( './../none-by' ) );

/**
* @name iterNth
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/nth}
*/
setReadOnly( ns, 'iterNth', require( './../nth' ) );

/**
* @name iterPipeline
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/pipeline}
*/
setReadOnly( ns, 'iterPipeline', require( './../pipeline' ) );

/**
* @name iterThunk
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/pipeline-thunk}
*/
setReadOnly( ns, 'iterThunk', require( './../pipeline-thunk' ) );

/**
* @name iterPop
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/pop}
*/
setReadOnly( ns, 'iterPop', require( './../pop' ) );

/**
* @name iterPush
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/push}
*/
setReadOnly( ns, 'iterPush', require( './../push' ) );

/**
* @name iterReject
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/reject}
*/
setReadOnly( ns, 'iterReject', require( './../reject' ) );

/**
* @name iterReplicate
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/replicate}
*/
setReadOnly( ns, 'iterReplicate', require( './../replicate' ) );

/**
* @name iterReplicateBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/replicate-by}
*/
setReadOnly( ns, 'iterReplicateBy', require( './../replicate-by' ) );

/**
* @name iterShift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/shift}
*/
setReadOnly( ns, 'iterShift', require( './../shift' ) );

/**
* @name iterSlice
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/slice}
*/
setReadOnly( ns, 'iterSlice', require( './../slice' ) );

/**
* @name iterSome
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/some}
*/
setReadOnly( ns, 'iterSome', require( './../some' ) );

/**
* @name iterSomeBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/some-by}
*/
setReadOnly( ns, 'iterSomeBy', require( './../some-by' ) );

/**
* @name iterStep
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/step}
*/
setReadOnly( ns, 'iterStep', require( './../step' ) );

/**
* @name iterStrided
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/strided}
*/
setReadOnly( ns, 'iterStrided', require( './../strided' ) );

/**
* @name iterStridedBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/strided-by}
*/
setReadOnly( ns, 'iterStridedBy', require( './../strided-by' ) );

/**
* @name iterator2arrayview
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/to-array-view}
*/
setReadOnly( ns, 'iterator2arrayview', require( './../to-array-view' ) );

/**
* @name iterator2arrayviewRight
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/to-array-view-right}
*/
setReadOnly( ns, 'iterator2arrayviewRight', require( './../to-array-view-right' ) );

/**
* @name iterUnion
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/union}
*/
setReadOnly( ns, 'iterUnion', require( './../union' ) );

/**
* @name iterUnique
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unique}
*/
setReadOnly( ns, 'iterUnique', require( './../unique' ) );

/**
* @name iterUniqueBy
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unique-by}
*/
setReadOnly( ns, 'iterUniqueBy', require( './../unique-by' ) );

/**
* @name iterUniqueByHash
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unique-by-hash}
*/
setReadOnly( ns, 'iterUniqueByHash', require( './../unique-by-hash' ) );

/**
* @name iterUnitspace
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unitspace}
*/
setReadOnly( ns, 'iterUnitspace', require( './../unitspace' ) );

/**
* @name iterUnshift
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/iter/unshift}
*/
setReadOnly( ns, 'iterUnshift', require( './../unshift' ) );


// EXPORTS //

module.exports = ns;
