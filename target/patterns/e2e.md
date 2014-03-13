## 앵귤러JS 엔드 투 엔드(E2E) 테스트

##### End-to-End 테스트 프레임워크

* [앵귤러 시나리오(Angular Scenario)](#angular-scenario-)* [프로트렉터(Protractor)](#protractor-)

### 앵귤러 시나리오(Angular Scenario) [&#8593;](#end-to-end-testing-frameworks)

앵귤러 시나리오는 브라우저 기반의 간단한 엔드 투 엔드 테스트 실행기입니다.

#### 의존 라이브러리 설치하기

* `bower install angular-scenario --save-dev` 명령어를 실행해 [angular-scenario](https://github.com/angular/bower-angular-scenario)를 실행합니다.

#### 시나리오 실행기 설정하기

설정해야할 부분이 따로 있지는 않습니다. 그저 파일을 하나 만들고 실행기를 로드하고 실행하고자 하는 시나리오를 불러오면 됩니다([example file](../example/javascript/e2e.html)).

#### 테스트 패턴

* [권장하는 설정](#suggested-scenario-unit-test-setup-)* 라우트* [have a default route configured](#have-a-default-route-configured-)* 렌더링된 결과는* [예상되는 텍스트를 포함해야한다](#should-contain-expected-text-)* [직접 정의한 지시자 태그를 포함해야한다](#should-contain-my-directive-tag-)* [직접 정의한 지시자 속성을 포함해야한다](#should-contain-my-directive-attribute-)* [직접 정의한 지시자 클래스 이름을 포함해야 한다.](#should-contain-my-directive-class-name-)* Interactions* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)** 좋은 패턴을 알고 계신가요?* *[풀리퀘스트로 알려주세요!](../#contributing-test-patterns)*

#### 권장하는 시나리오 유닛 테스트 설정 [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'My App', -># 스펙 추가하기```

```JavaScript// JavaScriptdescribe('My App', function () {// Add specs});```

#### My app은:

##### `기본 라우트(default route)` 설정을 가지고 있어야한다[&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'default route', ->it 'should automatically redirect to / when location hash/fragment is empty', ->browser().navigateTo 'index.html'expect(browser().location().url()).toBe '/'

  it 'should automatically redirect to / when location hash/fragment is invalid', ->browser().navigateTo '#/foo-bar-bas'expect(browser().location().url()).toBe '/'

  it 'should not automatically redirect to / when location hash/fragment is valid', ->browser().navigateTo '#/about'expect(browser().location().url()).toBe '/about'```

```JavaScript// JavaScriptdescribe('기본 라우트', function () {it('should automatically redirect to / when location hash/fragment is empty', function () {browser().navigateTo('index.html');expect(browser().location().url()).toBe('/');});

  it('should automatically redirect to / when location hash/fragment is invalid', function () {browser().navigateTo('#/foo-bar-bas');expect(browser().location().url()).toBe('/');});

  it('should not automatically redirect to / when location hash/fragment is valid', function () {browser().navigateTo('#/about');expect(browser().location().url()).toBe('/about');});});```

#####should contain `expected text` [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'my view', ->beforeEach ->browser().navigateTo '#/'

  it 'should contain expected text', ->expect(element('[ng-view] p:first').text()).toBe 'this is the home page.'```

```JavaScript// JavaScriptdescribe('my view', function () {beforeEach(function () {browser().navigateTo('#/');});

  it('should contain expected text', function () {expect(element('[ng-view] p:first').text()).toBe('this is the home page.');});});```

#####should contain my `directive tag` [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'my view', ->beforeEach ->browser().navigateTo '#/'

  it 'should contain my directive tag', ->elm = element('[ng-view] my-dir')expect(elm.count()).toBe 1```

```JavaScript// JavaScriptdescribe('my view', function () {beforeEach(function () {browser().navigateTo('#/');});

  it('should contain my directive tag', function () {var elm = element('[ng-view] my-dir');expect(elm.count()).toBe(1);});});```

#####should contain my `directive attribute` [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'my view', ->beforeEach ->browser().navigateTo '#/'

  it 'should contain my directive attribute', ->elm = element('[ng-view] [my-dir]')expect(elm.count()).toBe 1```

```JavaScript// JavaScriptdescribe('my view', function () {beforeEach(function () {browser().navigateTo('#/');});

  it('should contain my directive attribute', function () {var elm = element('[ng-view] [my-dir]');expect(elm.count()).toBe(1);});});```

#####should contain my `directive class name` [&#8593;](#testing-patterns)```CoffeeScript# CoffeeScriptdescribe 'my view', ->beforeEach ->browser().navigateTo '#/'

  it 'should contain my directive class name', ->elm = element('[ng-view] .my-dir')expect(elm.count()).toBe 1```

```JavaScript// JavaScriptdescribe('my view', function () {beforeEach(function () {browser().navigateTo('#/');});

  it('should contain my directive class name', function () {var elm = element('[ng-view] .my-dir');expect(elm.count()).toBe(1);});});```


---

### Protractor [&#8593;](#end-to-end-testing-frameworks)

[Protractor](https://github.com/angular/protractor) is an end to end test framework for [Angular](http://angularjs.org/) applications built on top of [WebDriverJS](https://code.google.com/p/selenium/wiki/WebDriverJs).

#### 의존 라이브러리 설치하기

* Install [protractor](https://github.com/angular/protractor) by running `npm install protractor --save-dev`

#### JavaScript [&#8593;](#end-to-end-testing-frameworks)

Disclaimer: I haven't used protractor yet and frankly it looked a bit complicated to get setup correctly, whereas using angular-scenario is dead simple.

*[풀 리퀘스트를 보내주세요!](../#contributing-test-patterns)*

#### CoffeeScript [&#8593;](#end-to-end-testing-frameworks)

Looks like it does have a CoffeeScript [preprocessor plugin](https://github.com/angular/protractor/issues/38).