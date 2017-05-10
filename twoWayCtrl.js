app.controller("myCtrl", function($scope, $firebaseObject){

    var ref = new Firebase('https://fir-app-23b8b.firebaseio.com/student'); 

    var syncObject = $firebaseObject(ref); 

    syncObject.$bindTo($scope, "student");

        $scope.firstName = "Ajinkya"
        $scope.lastName = "Chanshetty"
        $scope.contact = 9960282703
        $scope.email = "aajinkya@hotmail.com"

})
