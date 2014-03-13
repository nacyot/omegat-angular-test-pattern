## 테스트 커버리지 일정 수준 이상으로 강제하기 @@@

ㅎ

### 자바스크립트

#### 의존 라이브러리 설치하기

*  `npm install grunt-istanbul-coverage --save-dev` 명령어를 실행해서 [grunt-istanbul-coverage]를 설치(https://github.com/daniellmb/grunt-istanbul-coverage)합니다.
* `npm install karma-coverage --save-dev`를 실행해서 [karma-coverage](https://github.com/karma-runner/karma-coverage)를 설치합니다.

먼저 커버리지 파일을 생성하기 위해 karma를 설정합니다. ([full example](../example/javascript/karma.conf.js)).

#### 카르마 커버리지 설정 예제```JavaScript// JavaScriptconfig.set({// ...
// 테스트 결과 출력에 사용할 리포터 지정reporters: ['dots', 'coverage'],

  // 어떤 파일이 커버리지 측정에 사용될 지 지정합니다.
  preprocessors: {'*.js': 'coverage'},

  // 커버리지 리포터 설정coverageReporter: {// 자세한 출력 결과가 필요하다면 'html'을 사용합니다//type: 'html',type: 'text-summary',dir: 'coverage'}// ...
});```


다음으로 커버리지 기준을 정하기 위해 다음 몇 줄을 그런트(Grunt) 설정 파일에 추가해줍니다.

#### 커버리지 기준 설정 예제```JavaScript// JavaScriptgrunt.initConfig({// ...
coverage: {options: {thresholds: {statements: 100,branches: 100,functions: 100,lines: 100},dir: 'coverage',root: 'javascript'}}// ...
});```


TIP: Use [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) to clean the coverage folder each time to speed up the checks and so you're only validating the most recent coverage levels generated from karma ([full example](../example/Gruntfile.js)).

#### 그런트(Grunt) 클린 설정 예제```JavaScript// JavaScriptgrunt.initConfig({// ...
clean: {coverage: 'coverage/*'}// ...
});```


#### 실행 순서!

1. 먼저 `clean` 명령어로 이전에 생성된 커버리지 관련 파일들을 삭제합니다.
2. `karma`를 실행시켜 유닛 테스트를 실행하고 커버리지 파일을 생성합니다.
3. `coverage` 태스크를 실행해 테스트 결과가 커버리지 기준을 만족하는지 분석합니다.

#### 태스크 순서(순서) 예제```JavaScript// JavaScriptgrunt.registerTask('test', ['clean:coverage','karma','coverage']);```


### 커피스크립트(CoffeeScript)

아직 karma-coverage는 [커피스크립트를 지원하지 않습니다](https://github.com/karma-runner/karma-coverage/pull/12) @@@ 