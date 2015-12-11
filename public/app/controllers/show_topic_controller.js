FoorumApp.controller('ShowTopicController', function ($scope, $routeParams, $location, Api) {
    $scope.newMessage = {
        title: "",
        content: ""
    }
    
    Api.getTopic($routeParams.id).success(function (topic) {
        $scope.topic = topic;
    });
    
    $scope.addMessage = function () {
        Api.addMessage($scope.newMessage, $scope.topic.id).success(function (message) {
            $location.path("/messages/" + message.id);
        });
    }
});
