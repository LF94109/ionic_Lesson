



/* 在JS中，如果想要使用IONIC当中的JS效果，那么我该做的第一件事儿，启动angular*/
/* 这样，我才能正确的调用出来IONIC中的效果*/

/* 定义一个模块，并且在这个模块中引入ionic模块*/
var app = angular.module('zlf',['ionic'])

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

//启动所有的功能，启动的范围在document下
// angular.bootstrap(document,['zlf']);
app.controller('listCtrl',function($scope){
  $scope.items = [];
  for(var i=0;i<50;i++){
    $scope.items.push(["this is line",i].join(""));
  }
});
//刷新的控制器
app.controller('resh',function($scope){
  $scope.items = [];
  var base = 1;
  $scope.doRefresh = function(){
    for(var i=0;i<10;i++,base++){
      $scope.items.unshift(['items',base].join(""));
    }
    //要将刷新的动态告诉控制器
    $scope.$broadcast('scroll.refreshComplete');
  }
});
//滚动刷新的控制器
app.controller('scrollCtrl',function($scope,$timeout){
  $scope.items =[];
  var base = 1;
  $scope.more = function(){
    $timeout(function(){
      for(var i=0;i<10;i++,base++){
        $scope.items.push(["item",base].join(""));
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    },500)
  }
})
//tab切换的控制器
app.controller('tabCtrl',['$scope',function($scope){
  $scope.dosomething = function(){
  }
}])

//拖拽，删除
app.controller('allCtrl',function($scope){
  $scope.items = ['中国','日本','泰国','新加坡','澳大利亚','悉尼']
  $scope.delete_item = function(value){
    //首先获取对应当前删除元素的下标
    var idx = $scope.items.indexOf(value)
    //通过下标删除对应的元素
    $scope.items.splice(idx,1)
  }
  $scope.move_item = function(item,fromIndex,toIndex){
    //item是要进行拖拽的元素本身
    //fromIndex是元素原来的位置
    //toIndex是拖拽之后的位置
    //splice
    $scope.items.splice(fromIndex,1)
    $scope.items.splice(toIndex,0,item)
  }
});
//复选框按钮的控制器
app.controller('check',function($scope){
  $scope.items = [
    {label:'HTML5',selected:true},
    {label:'CSS3'},
    {label:'PHP5'}
  ]
})
app.controller('radio',function($scope){
  $scope.items =['HTML5','CSS3','PHP5']
  $scope.ret = {choice:'CSS3'}
})
/*模态框的控制器*/
app.controller('modal',function($scope,$ionicModal){
  $ionicModal.fromTemplateUrl('modal.html',{
    scope:$scope,
    animation:"slide-in-up"
  }).then(function(modal){
    $scope.modal = modal;
  })
  $scope.openModal = function(){
    $scope.modal.show()
  }
  $scope.closeModal = function(){
    $scope.modal.hide()
  }
})

/*上拉菜单的控制器*/
app.controller('slideup',function($scope,$ionicActionSheet,$timeout){
  $scope.show = function(){
    var sheet = $ionicActionSheet.show({
      titleText:'当前文章操作',
      buttons:[
        {text:'分享到朋友圈'},
        {text:'移动到...'}
      ],
      cancelText:'取消'
    })
  }
})

//confirm弹出框
app.controller('PopupCtrl',function($scope,$ionicPopup,$timeout){
  $scope.show = function(){
    var popup = $ionicPopup.confirm({
      title:'删除记忆',
      buttons:[
        {text:'确认'},
        {text:'取消'}
      ],
      template:'你确定要删除所有记忆吗？'
    }).then(function(options) {
      if(options) {
        console.log('干得漂亮！');
      } else {
        console.log('再好好想想吧！');
      }
    });
  }

  //警告框
  $scope.alert = function(){
    var popup = $ionicPopup.alert({
      title:'记忆',
      buttons:[
        {text:'确定',
          color:'blue'
        }
      ],
      template:'你已经没有记忆！'
    }).then(function(options) {
      if(options) {
        console.log('干得漂亮！');
      } else {
        console.log('再好好想想吧！');
      }
    });
  }

})







































