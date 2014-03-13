# 앵귤러JS 예제 어플리케이션

Each sample application satisfies all of the unit test patterns available, from [controllers](../patterns/controller.md) to [filters](../patterns/filter.md). To run the test patterns against the example applications use: `npm run testExamples`. This task extracts the test patterns from the markdown files and generates a jasmine unit test file for each of the supported code languages. Once this is done the generated specs are run against the example application using karma just as a normal AngularJS application would be.

Example applications are provided in the following languages:

* [커피스크립트(CoffeeScript)](coffeescript)* [자바스크립트(JavaScript)](javascript)

**Please Note:** that these examples are configured into a single file to be succinct... not maintainable. You'll want to break your application out into separate files and folders as needed.

[Read more](../#whats-an-angularjs-test-pattern) about how test patterns are used and created.
