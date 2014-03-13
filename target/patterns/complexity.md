## Complexity Threshold Enforcement for AngularJS

### 자바스크립트

#### 의존 라이브러리 설치하기

* Install [grunt-complexity](https://github.com/vigetlabs/grunt-complexity) by running `npm install grunt-complexity --save-dev`

Then add a few lines to your grunt file to configure it ([full example](../example/Gruntfile.js)).

####Example```JavaScript// JavaScriptgrunt.initConfig({// ...
complexity: {js: {// 분석하고자 하는 파일 리스트src: ['javascript/*.js'],options: {// show only maintainability errorserrorsOnly: false,// http://en.wikipedia.org/wiki/Cyclomatic_complexitycyclomatic: 8,// http://en.wikipedia.org/wiki/Halstead_complexity_measureshalstead: 8,maintainability: 100}}}// ...
});```


![screenshot](https://raw.github.com/vigetlabs/grunt-complexity/master/example.png)
![screenshot](https://raw.github.com/vigetlabs/grunt-complexity/master/complexity.png)

### 커피스크립트(CoffeeScript)

Unfortunately grunt-complexity [doesn't support CoffeeScript yet](https://github.com/vigetlabs/grunt-complexity/issues/14), but it's only a pull request away if you have the time to implement it *hint hint* :) In the meantime you can use *grunt-coffeelint* as it has [basic complexity checking](https://github.com/clutchski/coffeelint/blob/master/test/test_cyclomatic_complexity.coffee) and threshold enforcement.

First install [grunt-coffeelint](https://github.com/vojtajina/grunt-coffeelint) by running `npm install grunt-coffeelint --save-dev`, then add a few lines to your grunt file to configure it ([full example](../example/Gruntfile.js)).

####Example```JavaScript// JavaScriptgrunt.initConfig({// ...
coffeelint: {// 분석하고자 하는 파일 리스트all: ['coffeescript/*.coffee'],options: {cyclomatic_complexity: {// http://en.wikipedia.org/wiki/Cyclomatic_complexityvalue: 8,level: 'error'}}},// ...
});```


