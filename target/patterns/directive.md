## 앵귤러JS 디렉티브 유닛 테스트

##### 테스트 패턴

* [권정하는 설정](#suggested-directive-unit-test-setup-)* When created* [should throw error when ngModel attribute not defined](#throw-error-when-ngmodel-attribute-not-defined-)* [should render the expected output](#render-the-expected-output-)* 모델이 변경되었을 때* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)** when destroyed* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)*

###### [예제](../example)는 이 패턴들을 기반으로 만들어졌습니다.

#### 권장되는 지시자 유닛 테스트 설정[&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'Directive: myDir', ->element = scope = compile = defaultData = nullvalidTemplate = '<my-dir ng-model="data"></my-dir>'

  createDirective = (data, template) -># 스코프(scope) 상태 설정scope.data = data or defaultData

    # 지시자 만들기elm = compile(template or validTemplate) scope

    # Trigger watchers#scope.$apply()# 리턴elm

  beforeEach -># 디렉티브의 모듈 읽어오기 @@@module 'myApp'

    # 매 번 실행시 데이터 재설정defaultData = 42

    # Provide any mocks neededmodule ($provide) ->#$provide.value 'Name', new MockName()# 커피스크립트 상에서 어떤 것도 리턴하지 않음에 주목하세요.
      null

    # Inject in angular constructs otherwise,// 테스트 시에도 이것들을 주입해야합니다.
    inject ($rootScope, $compile) ->scope = $rootScope.$new()compile = $compiledescribe '만들어졌을 때', -># 스펙 추가하기

  describe '모델이 바뀌었을 때', -># 스펙 추가하기

  describe 'when destroyed', -># 스펙 추가하기```

```JavaScript// JavaScriptdescribe('Directive: myDir', function () {var element, scope, compile, defaultData,validTemplate = '<my-dir ng-model="data"></my-dir>';

  createDirective = (data, template) ->var elm;// 스코프(scope) 상태 설정scope.data = data || defaultData;

    // 지시자 만들기elm = compile(template || validTemplate)(scope);

    // Trigger watchers//scope.$apply();

    // Returnreturn elm;}

  beforeEach(function () {

    // 디렉티브의 모듈 읽어오기 @@@module('myApp');// 매 번 실행시 데이터 재설정defaultData = 42;// Provide any mocks neededmodule(function ($provide) {//$provide.value('Name', new MockName());});// Inject in angular constructs otherwise,// 테스트 시에도 이것들을 주입해야합니다.
    inject(function ($rootScope, $compile) {scope = $rootScope.$new();compile = $compile;});});

  describe('만들어졌을 때', function () {// Add specs});

  describe('모델이 바뀌었을 때', function () {// Add specs});

  return describe('when destroyed', function () {// Add specs});});```

#### 이 디렉티브는:

##### ngModel 속성이 정의되어있지 않으면 에러를 발생시켜야한다 [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit 'ngModel이 정의되어있지 않으면 에러를 발생시켜야 한다', ->invalidTemplate = ->createDirective null, '<my-dir></my-dir>'# 참고 : 이전 버전의 앵귤러JS에서는 'No controller: ngModel'이라는 에러를 발생시켰습니다.
    # 최근 버전에서는 "'myDir' 지시자에서 요구하는 'ngModel' 컨트롤러를 찾을 수 없습니다(Controller 'ngModel', required by directive 'myDir', can't be found!)"라는 에러를 발생시킵니다.
expect(invalidTemplate).toThrow()```

```JavaScript// JavaScriptit('ngModel이 정의되어있지 않으면 에러를 발생시켜야 한다', function(){function invalidTemplate() {createDirective(null, '<my-dir></my-dir>');}// 참고 : 이전 버전의 앵귤러JS에서는 'No controller: ngModel'이라는 에러를 발생시켰습니다.
  // 최근 버전에서는 "'myDir' 지시자에서 요구하는 'ngModel' 컨트롤러를 찾을 수 없습니다(Controller 'ngModel', required by directive 'myDir', can't be found!)"라는 에러를 발생시킵니다.
expect(invalidTemplate).toThrow();});```

##### 예상대로 렌더되어야한다. [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptit '예상대로 렌더되어야하나다.', ->element = createDirective()expect(element.text()).toBe 'this is my directive'```

```JavaScript// JavaScriptit('예상대로 렌더되어야한다.', function () {element = createDirective();expect(element.text()).toBe 'this is my directive'});```


