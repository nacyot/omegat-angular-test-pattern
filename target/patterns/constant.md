# Unit Testing AngularJS Constants

##### 테스트 패턴

* [Suggested Setup](#suggested-constant-unit-test-setup-)* Patterns* [be my expected value](#be-my-expected-value-)* 좋은 패턴을 알고 계신가요?* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)*

###### [예제](../example)는 이 패턴들을 기반으로 만들어졌습니다.

####Suggested Constant Unit Test Setup [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'Constant: myConst', ->myConst = null

  beforeEach -># Load the constant's modulemodule 'myApp'

    # Inject in angular constructs otherwise,// 테스트 시에도 이것들을 주입해야합니다.
    inject (_myConst_) ->myConst = _myConst_

  it 'should exist', ->
    expect(!!myConst).toBe yes

  describe 'the constant', -># 스펙 추가하기```

```JavaScript// JavaScriptdescribe('Constant: myConst', function () {var myConst;

  beforeEach(function () {// Load the constant's modulemodule('myApp');

    // Inject in angular constructs otherwise,// 테스트 시에도 이것들을 주입해야합니다.
    inject(function (_myConst_) {myConst = _myConst_;});});

  it('should exist', function () {expect(!!myConst).toBe(true);});

  describe('the constant', function () {// Add specs});});```

####My constant should:

#####be my expected value [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'should be my expected value', ->expect(myConst).toBe(42)```

```JavaScript// JavaScriptit('should return my expected value', function () {expect(myConst).toBe(42);});```



