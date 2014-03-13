# Unit Testing AngularJS Services

##### 테스트 패턴

* [Suggested Setup](#suggested-service-unit-test-setup-)* Data type test patterns* [Anything](#provide-a-mything-property-)* [Array](#provide-a-myarray-property-)* [Boolean](#provide-a-myboolean-property-)* [Date](#provide-a-mydate-property-)* [Method](#provide-a-mymethod-function-)* [Null](#provide-a-mynull-property-)* [Number](#provide-a-mynumber-property-)* [Object](#provide-a-myobject-property-)* [RegExp](#provide-a-myregexp-property-)* [String](#provide-a-mystring-property-)* [Undefined](#expect-a-myundefined-to-be-undefined-)* 메소드 사용하기* [기대하는 값을 리턴해야한다](#mymethod-should-return-expected-value-)* 좋은 패턴을 알고 계신가요?* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)*

###### [예제](../example)는 이 패턴들을 기반으로 만들어졌습니다.

####Suggested Service Unit Test Setup [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'Service: mySvc', ->mySvc = null# Use to provide any mocks needed_provide = (callback) -># Execute callback with $providemodule ($provide) ->callback $provide# 커피스크립트 상에서 어떤 것도 리턴하지 않음에 주목하세요.
      null

  # Use to inject the code under test_inject = ->inject (_mySvc_) ->mySvc = _mySvc_

  # Call this before each test, except where you are testing for errors_setup = -># Mock any expected data_provide (provide) ->provide.value 'myVal', {}# Inject the code under test_inject()

  beforeEach -># Load the service's modulemodule 'myApp'

  describe 'the service api', ->beforeEach -># Inject with all expected values_setup()

    it 'should exist', ->expect(!!mySvc).toBe true# 스펙 추가하기

  describe 'service errors', ->it 'should throw an error when required dependency is missing', -># Use an anonymous function to wrap the code that will failwrapper = -># Inject WITHOUT providing required values_inject()expect(wrapper).toThrow 'mySvc: myVal not provided'###Note: you can use Function.bind to avoid an anonymous function wrapper for inject,however, you'll need a polyfill for PhantomJS such as: http://goo.gl/XSLOdxsvc = (mySvc) ->expect(inject.bind(null, svc)).toThrow 'mySvc: myVal not provided'###```

```JavaScript// JavaScriptdescribe('Service: mySvc', function () {var mySvc;

  // Use to provide any mocks neededfunction _provide(callback) {// Execute callback with $providemodule(function ($provide) {callback($provide);});}

  // Use to inject the code under testfunction _inject() {inject(function (_mySvc_) {mySvc = _mySvc_;});}

  // Call this before each test, except where you are testing for errorsfunction _setup() {// Mock any expected data_provide(function (provide) {provide.value('myVal', {});});

    // Inject the code under test_inject();}

  beforeEach(function () {// Load the service's modulemodule('myApp');});

  describe('the service api', function () {beforeEach(function () {// Inject with expected values_setup();});

    it('should exist', function () {expect(!!mySvc).toBe(true);});

    // Add specs});

  describe('service errors', function () {it('should throw an error when required dependency is missing', function () {// Use an anonymous function to wrap the code that will failfunction wrapper() {// Inject WITHOUT providing required values_inject();}expect(wrapper).toThrow('mySvc: myVal not provided');

      /*Note: you can use Function.bind to avoid an anonymous function wrapper for inject,however, you'll need a polyfill for PhantomJS such as: http://goo.gl/XSLOdxvar svc = function (mySvc) {};expect(inject.bind(null, svc)).toThrow('mySvc: myVal not provided');*/});});});```

####My service should:

#####provide a `myThing` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should define a myThing property', ->expect(mySvc.myThing).toBeDefined()```

```JavaScript// JavaScriptit('should define a myThing property', function () {expect(mySvc.myThing).toBeDefined();});```

#####provide a `myArray` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myArray property', ->expect(mySvc.myArray instanceof Array).toBe true```

```JavaScript// JavaScriptit('should provide a myArray property', function () {expect(mySvc.myArray instanceof Array).toBe(true);});```

#####provide a `myBoolean` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a boolean myBoolean property', ->expect(typeof mySvc.myBoolean).toBe 'boolean'```

```JavaScript// JavaScriptit('should provide a boolean myBoolean property', function () {expect(typeof mySvc.myBoolean).toBe('boolean');});```

#####provide a `myDate` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myDate property', ->expect(mySvc.myDate instanceof Date).toBe true```

```JavaScript// JavaScriptit('should provide a myDate property', function () {expect(mySvc.myDate instanceof Date).toBe(true);});```

#####provide a `myMethod` function [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myMethod function', ->expect(typeof mySvc.myMethod).toBe 'function'````

```JavaScript// JavaScriptit('should provide a myMethod function', function () {expect(typeof mySvc.myMethod).toBe('function');});```

#####provide a `myNull` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myNull property', ->expect(mySvc.myNull).toBe null```

```JavaScript// JavaScriptit('should provide a myNull property', function () {expect(mySvc.myNull).toBe(null);});```

#####provide a `myNumber` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myNumber property', ->expect(typeof mySvc.myNumber).toBe 'number'```

```JavaScript// JavaScriptit('should provide a myNumber property', function () {expect(typeof mySvc.myNumber).toBe('number');});```

#####provide a `myObject` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myObject property', ->expect(mySvc.myObject instanceof Object).toBe true```

```JavaScript// JavaScriptit('should provide a myObject property', function () {expect(mySvc.myObject instanceof Object).toBe(true);});```

#####provide a `myRegExp` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myRegExp property', ->expect(mySvc.myRegExp instanceof RegExp).toBe true```

```JavaScript// JavaScriptit('should provide a myRegExp property', function () {expect(mySvc.myRegExp instanceof RegExp).toBe(true);});```

#####provide a `myString` property [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myString property', ->expect(typeof mySvc.myString).toBe 'string'```

```JavaScript// JavaScriptit('should provide a myString property', function () {expect(typeof mySvc.myString).toBe('string');});```

#####expect `myUndefined` to be undefined [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should expect myUndefined to be undefined', ->expect(mySvc.myUndefined).not.toBeDefined()```

```JavaScript// JavaScriptit('should expect myUndefined to be undefined', function () {expect(mySvc.myUndefined).not.toBeDefined();});```

#####`myMethod` should return expected value [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'myMethod should return expected value', ->result = mySvc.myMethod()expect(result).toBe('Not implemented')```

```JavaScript// JavaScriptit('myMethod should return expected value', function () {var result = mySvc.myMethod();expect(result).toBe('Not implemented');});```


