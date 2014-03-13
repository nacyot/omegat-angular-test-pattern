## Unit Testing AngularJS Controllers

##### 테스트 패턴

* [권장하는 설정](#suggested-controller-unit-test-setup-)* 데이터 타입* [Anything](#attach-mything-to-the-scope-)* [배열(Array)](#attach-myarray-to-the-scope-)* [논리값(Boolean)](#attach-myboolean-to-the-scope-)* [날짜(Date)](#attach-mydate-to-the-scope-)* [메소드(Method)](#attach-mymethod-to-the-scope-)* [널(Null)](#attach-mymethod-to-the-scope-)* [숫자(Number)](#attach-mynumber-to-the-scope-)* [객체(Object)](#attach-myobject-to-the-scope-)* [정규표현식(RegExp)](#attach-myregexp-to-the-scope-)* [문자열(String](#attach-mystring-to-the-scope-)* [미정의(Undefined)](#expect-myundefined-to-be-undefined-)* 메소드 사용하기* [기대하는 값을 리턴해야한다](#mymethod-should-return-expected-value-)* [같은 컨트롤러의 메소드를 호출해야한다](#call-mymethod2-on-myctrl-)* [서비스에서 메소드를 호출해야한다](#call-mymethod-on-myservice-)* 좋은 패턴을 알고 계신가요?* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)*

###### [예제](../example)는 이 패턴들을 기반으로 만들어졌습니다.

#### 권장되는 컨트롤러 유닛 테스트 설정[&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'Controller: myCtrl', ->myCtrl = scope = mySvc = null# 컨트롤러와 스코프(scope) 초기화beforeEach -># 컨트롤러의 모듈 읽어오기module 'myApp'# Provide any mocks neededmodule ($provide) ->$provide.value 'mySvc', new MockMySvc()# 커피스크립트 상에서 어떤 것도 리턴하지 않음에 주목하세요.
      null

    # Inject angular constructs otherwise,# 테스트 시에도 이것들을 주입해야합니다.
    inject ($controller, _mySvc_) ->scope = {}mySvc = _mySvc_myCtrl = $controller 'myCtrl',$scope: scopeit 'should exist', ->expect(!!myCtrl).toBe yes

  describe '만들어졌을 때', -># 스펙 추가하기

  describe 'when destroyed', -># 스펙 추가하기```

```JavaScript// JavaScriptdescribe('Controller: myCtrl', function () {var myCtrl, scope, mySvc;

  // 컨트롤러와 스코프(scope) 초기화beforeEach(function () {// 컨트롤러의 모듈 읽어오기module('myApp');

    // Provide any mocks neededmodule(function ($provide) {$provide.value('mySvc', new MockMySvc());});

    // Inject in angular constructs otherwise,// 테스트 시에도 이것들을 주입해야합니다.
    inject(function ($controller, _mySvc_) {scope = {};mySvc = _mySvc_;myCtrl = $controller('myCtrl', {$scope: scope});});

  });

  it('should exist', function () {expect(!!myCtrl).toBe(true);});

  describe('만들어졌을 때', function () {// Add specs});

  describe('when destroyed', function () {// Add specs});});```

#### My controller should:

#####attach `myThing` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should define a myThing property', ->expect(scope.myThing).toBeDefined()```

```JavaScript// JavaScriptit('should define a myThing property', function () {expect(scope.myThing).toBeDefined();});```

#####attach `myArray` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myArray property', ->expect(scope.myArray instanceof Array).toBe true```

```JavaScript// JavaScriptit('should provide a myArray property', function () {expect(scope.myArray instanceof Array).toBe(true);});```

#####attach `myBoolean` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a boolean myBoolean property', ->expect(typeof scope.myBoolean).toBe 'boolean'```

```JavaScript// JavaScriptit('should provide a boolean myBoolean property', function () {expect(typeof scope.myBoolean).toBe('boolean');});```

#####attach `myDate` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myDate property', ->expect(scope.myDate instanceof Date).toBe true```

```JavaScript// JavaScriptit('should provide a myDate property', function () {expect(scope.myDate instanceof Date).toBe(true);});```

#####attach `myMethod` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myMethod function', ->expect(typeof scope.myMethod).toBe 'function'```

```JavaScript// JavaScriptit('should provide a myMethod function', function () {expect(typeof scope.myMethod).toBe('function');});```

#####attach `myNull` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myNull property', ->expect(scope.myNull).toBe null```

```JavaScript// JavaScriptit('should provide a myNull property', function () {expect(scope.myNull).toBe(null);});```

#####attach `myNumber` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myNumber property', ->expect(typeof scope.myNumber).toBe 'number'```

```JavaScript// JavaScriptit('should provide a myNumber property', function () {expect(typeof scope.myNumber).toBe('number');});```

#####attach `myObject` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myObject property', ->expect(scope.myObject instanceof Object).toBe true```

```JavaScript// JavaScriptit('should provide a myObject property', function () {expect(scope.myObject instanceof Object).toBe(true);});```

#####attach `myRegExp` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myRegExp property', ->expect(scope.myRegExp instanceof RegExp).toBe true```

```JavaScript// JavaScriptit('should provide a myRegExp property', function () {expect(scope.myRegExp instanceof RegExp).toBe(true);});```

#####attach `myString` to the scope [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should provide a myString property', ->expect(typeof scope.myString).toBe 'string'```

```JavaScript// JavaScriptit('should provide a myString property', function () {expect(typeof scope.myString).toBe('string');});```

#####expect `myUndefined` to be undefined [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should expect myUndefined to be undefined', ->expect(scope.myUndefined).not.toBeDefined()```

```JavaScript// JavaScriptit('should expect myUndefined to be undefined', function () {expect(scope.myUndefined).not.toBeDefined();});```

#####`myMethod` should return expected value [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'myMethod should return expected value', ->result = scope.myMethod()expect(result).toBe('Not implemented')```

```JavaScript// JavaScriptit('myMethod should return expected value', function () {var result = scope.myMethod();expect(result).toBe('Not implemented');});```

#####call `myMethod2` on `myCtrl` [&#8593;](#testing-patterns)Use to make sure one method is calling another.
```CoffeeScript# CoffeeScriptit 'should call myMethod2 from myMethod', -># 풀리퀘스트 환영합니다!```

```JavaScript// JavaScriptit('should call myMethod2 from myMethod', function () {// 풀리퀘스트 환영합니다.
});```

#####call `myMethod` on `mySvc` [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should call myMethod on mySvc', ->expect(mySvc.myMethod.callCount).toBe 1expect(mySvc.myMethod).toHaveBeenCalledWith jasmine.any(Object)```

```JavaScript// JavaScriptit('should call myMethod on mySvc', function () {expect(mySvc.myMethod.callCount).toBe(1);expect(mySvc.myMethod).toHaveBeenCalledWith(jasmine.any(Object));});```


