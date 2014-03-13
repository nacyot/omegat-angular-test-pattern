module.exports = function (config) {config.set({// 테스트에 사용할 프레임워크frameworks: ['jasmine'],

    // 브라우저에서 읽어올 파일 패턴files: [// 사용하는 라이브러리'../bower_components/angular/angular.js','../bower_components/angular-route/angular-route.js','../bower_components/angular-mocks/angular-mocks.js','../bower_components/angular-sanitize/angular-sanitize.js',// 어플리케이션 코드'app.js',// mocks'mock.js',// generated specs to run'spec.js'],

    // 테스트 결과 출력에 사용할 리포터 지정reporters: ['dots', 'coverage'],

    // 어떤 파일이 커버리지 측정에 사용될 지 지정합니다.
    preprocessors: {'*.js': 'coverage'},

    // 커버리지 리포터 설정coverageReporter: {// 자세한 출력 결과가 필요하다면 'html'을 사용합니다//type: 'html',type: 'text-summary',dir: 'coverage'},

    // 웹 서버 포트 지정port: 9877,

    // 로깅 레벨 설정logLevel: config.LOG_DISABLE,

    // 테스트할 브라우저 지정browsers: ['PhantomJS'],

    // 지속적 통합(Continuous Integration) 모드, 테스트 실행하고 종료하기singleRun: true});};