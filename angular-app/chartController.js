/**
 * Created by anya on 23.11.15.
 */

var ChartController = function($scope, $http) {

    function successCallback(response) {
        $scope.metadata = response;
    }

    function errorCallback(response) {

        console.log("Error in JSON interaction");
    }


    $scope.getReports = function() {
        var promise = $http.get("/api/reports", {withCredentials: true});
        return promise.then(successCallback, errorCallback);
    };

    $scope.getReports()
};

ChartController.$inject = ["$scope", "$http"];
module.exports = ChartController;
