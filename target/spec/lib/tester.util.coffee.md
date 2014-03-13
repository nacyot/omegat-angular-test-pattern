Unit Test Pattern Utility=========================

This simple utility written in literate CoffeeScript is used load and run the [pattern rules](../rules). The convention I use when writting literate CoffeeScript is that code colorized as CoffeeScript is the actual code used to implement this feature, while example code does not have syntax highlighting.

Find Specs----------

The `findSpecs` function is used search a given list of folders using a file matcher regex. Any matching files are returned in a sorted array. The default folder list is `spec/rules` and the default file matcher looks for files ending in `.spec.coffee.md` (aka literate CoffeeScript).

```CoffeeScript

    specs = require 'jasmine-node/lib/jasmine-node/spec-collection'

    exports.findSpecs = (folders = ['spec/rules'], fileMatcher = /\.spec\.coffee\.md$/i) ->#search folders then sort and returnspecs.load folders, fileMatcherspecs.getSpecs()```

Find Patterns-------------

The `findSpecs` function is used search a given list of folders using a file matcher regex. Any matching files are returned in a sorted array. The default folder list is `patterns` and the default file matcher looks for files ending in `.md` (aka markdown).

```CoffeeScript

    exports.findPatterns = (folders = ['patterns'], fileMatcher = /\.md$/i) ->#search folders then sort and returnspecs.load folders, fileMatcherspecs.getSpecs()```

Load Specs----------

The `loadSpecs` function is used to download an array of specs from `findSpecs`. An optional callback is called just before each file is 'required'. This is the point where the specs are registered with jasmine.

```CoffeeScript

    require 'coffee-script'

    exports.loadSpecs = (specs, callback) ->i = 0len = specs.lengthwhile i < lenspec = specs[i]# ensure that it's downloaded each timedelete require.cache[spec.path()]callback spec if callbacktryrequire spec.path()catch econsole.log "Exception loading: #{spec.path()}\n#{e}"throw e++i```

Load Patterns-------------

The `loadPatterns` function is used to download an array of specs from `findSpecs`. A callback is called with the file path and the parsed code blocks it contained.

```CoffeeScript

    parse = require './parse.util'

    exports.loadPatterns = (files, callback) ->nextFile = ->file = files.shift().path()blocks = parse.parse filecallback file, blocksnextFile() if files.lengthnextFile()```

Spec Reporter-------------

The function `setupReporter` is used to configure the TerminalReporter from jasmine-node used to display the results. As well as setup process listeners for exceptions and the reporter `onComplete` callback (created by the immediately invoked function expression) to set the exit code based on the test results.

```CoffeeScript

    jasmine = require 'jasmine-node'

    setupReporter = ->#control the process exit codeexitCode = 0onExit = ->process.removeListener 'exit', onExitprocess.exit exitCodeprocess.on 'uncaughtException', (e) ->console.error e.stack or eexitCode = 1process.exit exitCodeprocess.on 'exit', onExitonComplete = (runner) ->exitCode = if runner.results().failedCount is 0 then 0 else 1

      #reduce stack trace clutterstackTraceFilter = (text) ->return text unless textlines = []text.split(/\n/).forEach (line) ->lines.push line if line.indexOf('/jasmine-1.3.1.js') is -1lines.join '\n'

      #add jasmine reporterjasmine.getEnv().addReporter(new jasmine.TerminalReportercolor: trueonComplete: onCompletestackFilter: stackTraceFilter)```

Run Specs---------

The `runSpecs` function is used to setup the reporter and execute all the tests.

```CoffeeScript

    exports.runSpecs = ->setupReporter()jasmine.getEnv().execute()```