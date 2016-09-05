
var app = angular.module('zlf',['ionic']);

/*然后，进行启动时候的配置*/
app.run(function($rootScope,$state,$stateParams){

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});


/*第三步，设置路由系统的初始化*/
app.config(['$stateProvider','$urlRouterProvider',
  function($stateProvider,$urlRouterProvider){
    //设置路由
  }]);

app.controller('allCtrl',function($scope){

	//开始我们的项目代码
})
//tab切换的控制器
app.controller('tabCtrl',['$scope',function($scope){
  $scope.dosomething = function(){
    $scope.css('color','#A2A2A2')
  }
}])
