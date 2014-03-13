require('coffee-script/register');var fs = require('fs');var path = require('path');var util = require('./lib/tester.util');var jasmine = require('jasmine-node');

var specs = [];var currentBlock = null;

global.it = function (desc, func, timeout) {jasmine.getEnv().it(desc, func, timeout);jasmine.getEnv().currentSpec.codeBlock = currentBlock;};

/**Takes list of pattern file blocks, and gets the specs for each pattern code block.
*/var findBlockSpecs = function (file, blocks) {var fileName;

  if (blocks.length === 0) {return;}

  console.log(blocks.length + ' blocks in ' + path.basename(file));

  // load all the specs for each code blockblocks.forEach(function (block) {var list;

    // ?change the fileMatcher based on block.lang ?list = util.findSpecs();// console.log('  ' + block.desc + ' (' + block.lang + ')');

    list.map(function (spec) {spec.block = block;});// build up a list of all specs for all blocksspecs = specs.concat(list);});};

var setCurrentBlock = function (spec) {currentBlock = spec.block;};

// file pattern filesvar files = util.findPatterns();

// load pattern filesutil.loadPatterns(files, findBlockSpecs);

// load specs to test the patternsutil.loadSpecs(specs, setCurrentBlock);

// run the specsutil.runSpecs();