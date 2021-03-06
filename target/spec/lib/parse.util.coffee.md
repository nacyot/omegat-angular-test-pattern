Test Pattern Parse Utility==========================

This simple utility written in literate CoffeeScript parses markdown into blocks of code organized in test pattern sections. The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this feature, while example code does not have syntax highlighting.

###### [예제](../example)는 이 패턴들을 기반으로 만들어졌습니다.
---------------------------------

An angular test pattern file contains one section for each pattern, and each section can have any number of code blocks (in [diffrent languages](../config.json#L2)), [read more](#parse-markup-into-sections). For example:

```Example####My Awesome Test Pattern Title```CoffeeScript# CoffeeScript# My Awesome Test Pattern written in CoffeeScript``````JavaScript// JavaScript// My Awesome Test Pattern written in JavaScript```



```

Anatomy of a Test Pattern Code Block------------------------------------

At minimum, a properly formatted test pattern code block is a defined by a fenced code block &#96;&#96;&#96; with language specification and comment. This not only enables syntax colorizing but enables language-based [validatation](../rules/valid-code.spec.coffee.md#test-pattern-code-is-valid) and [linting](../rules/lint-free.spec.coffee.md#test-pattern-code-is-lint-free) of the code. For example:

```Example```CoffeeScript# CoffeeScript Code Block``````JavaScript// JavaScript Code Block``````

parse = require './parse.util'--------------------

Parse a single section into code blocks, and return them as an array.

```CoffeeScript

    path = require 'path'

    findCodeBlocks = /```([^`]*)```/gfindTestDesc = /it[\(\s]'(.*)',/g

    parseSection = (filePath, title, section) ->blocksInSection = []

      # Find all the code blocks in the secionfindCodeBlocks.lastIndex = 0 # Reset regexwhile (block = findCodeBlocks.exec(section)) isnt null

        # Split the block into lineslines = block[1].split('\n')# Take the first onelang = lines.shift()# Put it back togethercontents = lines.join('\n')

        # Get the name from the file pathtype = path.basename(filePath, '.md');

        # Search for test description (aka jasmine 'it')findTestDesc.lastIndex = 0 # Reset regexmatch = findTestDesc.exec(contents)desc = match[1] if match?and match.length > 1

        blocksInSection.pushfile: filePathtype: typelang: langtitle: titledesc: desccontents: contents

      # 리턴blocksInSection```

Parse Markup into Sections--------------------------

Parse a single section into code blocks, and return them as an array. 

The regex gibberish below defines a section as starting with a markdown heading between `####` (&#60;h4&#62;) and `######` (&#60;h6&#62;) with *no space* between the heading and the title. This convention helps reduce confusion between CoffeeScript comments such as `#` and `###`. Because a section can contain any number of code blocks, the end of a section is defined as an ending code fence &#96;&#96;&#96; followed by three (3) consecutive new lines. [See example](#anatomy-of-a-test-pattern-section). It is especially important to include these at the [end of the file](../fixtures/lint-free/coffeescript.txt) where it can be easy to overlook them. While a bit inconvenient, it is a small price to pay and adds to the readability of the raw files.

```CoffeeScript

    findSections = /#{4,6}(\w{1}.*)(?:\n){1}((?:.|\n)+?\`\`\`)(?:\n){3}/g

    exports.parse = (filePath) ->blocksInFile = []

      # get file contentsmarkup = getFile filePath

      # Find all the sectionsfindSections.lastIndex = 0 # Reset regexblocksInFile = blocksInFile.concat(parseSection(filePath, section[1], section[2])) while (section = findSections.exec(markup)) isnt null# Check for section formatting issuesfindCodeBlocks.lastIndex = 0 # Reset regexmatch = markup.match(findCodeBlocks)blockCount = (if match then match.length else 0)

      msg = "Format Error: #{filePath};\nFound #{blocksInFile.length} but expected #{blockCount} blocks"throw new Error(msg) unless blockCount is blocksInFile.length

      # 리턴blocksInFile```

Get File--------

The `getFile` method does nothing more than read a file synchronously from disk in UCS Transformation Format—8-bit and return it.

```CoffeeScriptfs = require 'fs'

    exports.getFile = getFile = (path) ->fs.readFileSync path, 'utf8'```