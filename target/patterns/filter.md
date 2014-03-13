## Unit Testing AngularJS Filters

##### 테스트 패턴

* [Suggested Setup](#suggested-filter-unit-test-setup-)* When evaluating an expression* [it should return the expected output](#return-the-expected-output-)* 좋은 패턴을 알고 계신가요?* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)*

###### [예제](../example)는 이 패턴들을 기반으로 만들어졌습니다.

####Suggested Filter Unit Test Setup [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'Service: myFltr', ->myFltr = null

  beforeEach -># Load the filters's modulemodule 'myApp'# Provide any mocks neededmodule ($provide) ->#$provide.value 'Name', new MockName()# 커피스크립트 상에서 어떤 것도 리턴하지 않음에 주목하세요.
      null

    # Inject in angular constructs otherwise,// 테스트 시에도 이것들을 주입해야합니다.
    inject ($filter) ->myFltr = $filter('myFltr')

  it 'should exist', ->
    expect(!!myFltr).toBe yes

  describe 'when evaluating an expression', -># 스펙 추가하기```

```JavaScript// JavaScriptdescribe('Filter: myFltr', function () {var myFltr;

  beforeEach(function () {// Load the filters's modulemodule('myApp');

    // Provide any mocks neededmodule(function ($provide) {//$provide.value('Name', new MockName());});

    // Inject in angular constructs otherwise,// 테스트 시에도 이것들을 주입해야합니다.
    inject(function ($filter) {myFltr = $filter('myFltr');});});

  it('should exist', function () {expect(!!myFltr).toBe(true);});

  describe('when evaluating an expression', function () {// Add specs});});```

#### My filter should:

#####return the expected output [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should return the expected output', ->text = 'AngularJS'expect(myFltr(text)).toBe "my filter: #{text}"```

```JavaScript// JavaScriptit('should return the expected output', function () {var text = 'AngularJS';expect(myFltr(text)).toBe('my filter: ' + text);});```


