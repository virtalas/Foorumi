FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    Api.getTopic($routeParams.id).success(function (topic) {
        $scope.topic = topic;
    });
    
    $scope.addMessage = function () {
        Api.addMessage($scope.newMessage, $scope.topic.id).success(function (message) {
            $location.path("/messages/" + message.id);
        });
    }
});
