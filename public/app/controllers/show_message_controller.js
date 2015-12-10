FoorumApp.controller('ShowMessageController', function ($scope, $routeParams, Api) {
    Api.getMessage($routeParams.id).success(function (message) {
        $scope.message = message;
        console.log($scope.message);
    });
    
    $scope.addReply = function () {
        Api.addReply($scope.newReply, $scope.message.id).success(function (reply) {
            $scope.message.Replies.push(reply);
            $scope.newReply.content = "";
        })
    }
});
