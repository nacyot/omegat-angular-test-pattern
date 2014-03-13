/**앵귤러JS 예제 어플리케이션=============================

Please Note: that this example is configured into a single file to be succinct... not maintainable.
You'll want to break yours out into separate files and folders as needed.

Configure Application---------------------

Declare module dependencies and routes, then create and configure the app.
*/

'use strict';

// 의존성 있는 모듈을 선언var dependencies = ['ngRoute','ngSanitize'];

// 어플리케이션 설정function config($routeProvider) {$routeProvider.when('/', {// 모든 언어에서 같은 파셜 뷰 사용templateUrl: '../views/home.html',controller: 'myCtrl'}).when('/about', {// 모든 언어에서 같은 파셜 뷰 사용templateUrl: '../views/about.html'}).otherwise({redirectTo: '/'});}

// 어플리케이션 모듈을 생성하고 설정angular.module('myApp', dependencies).config(['$routeProvider',config]);

/**어플리케이션 컨트롤러----------------------*/

// 컨트롤러 정의angular.module('myApp').controller('myCtrl', ['$scope', '$http', 'mySvc',function ($scope, $http, mySvc) {// Attach data types$scope.myThing = {};$scope.myArray = [];$scope.myBoolean = true;$scope.myDate = new Date();$scope.myMethod = function () {return 'Not implemented';};$scope.myNull = null;$scope.myNumber = 1337;$scope.myObject = {};$scope.myRegExp = /\s/;$scope.myString = 'test';$scope.myUndefined = undefined;// Call service methodmySvc.myMethod({});}]);

/*어플리케이션 지시자----------------------*/

// 지시자 선언하기angular.module('myApp').directive('myDir', [function () {return {template: '<div></div>',restrict: 'EAC',require: 'ngModel',link: function (scope, element, attrs) {return element.text('this is my directive');}};}]);

/**어플리케이션 필터----------------------*/

// 필터 정의하기angular.module('myApp').filter('myFltr', [function () {return function (input) {return 'my filter: ' + input;};}]);

/*어플리케이션 서비스----------------------

Rather than putting everything in a single return, this pattern of breaking out the exports intoseparate functions encurages simple methods that have a single purpose.
*/

angular.module('myApp').factory('mySvc', function factoryInit(myVal) {

  // check for required dependencyif (!myVal) {throw new Error('mySvc: myVal not provided');}

  /*Adds public myMethod to the api*/function exportMyMethod(api) {api.myMethod = function () {return 'Not implemented';};}

  function getAPI() {// export public propertiesvar publicAPI = {myThing: {},myArray: [],myBoolean: true,myDate: new Date(),myNull: null,myNumber: 1337,myObject: {},myRegExp: /\s/,myString: 'test',myUndefined: undefined};

    // add public methodsexportMyMethod(publicAPI);

    // api 리턴return publicAPI;}

  //return public APIreturn getAPI();})// 'provide' global variable dependency (so it can be mocked).value('myVal', window.myVal);

/*어플리케이션 상수----------------------*/

// 상수 정의하기angular.module('myApp').constant('myConst', 42);