// Controller
wheatherApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;
    // Value can change
    $scope.$watch('city', function(){
        cityService.city = $scope.city;   
    });
}]);

wheatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '1';
    
    $scope.wheatherAPI = 
        $resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
            {
                Callback: "JSON_CALLBACK"
            },
            {
                get: { method: "JSONP"}
            }
        );
    
    $scope.wheatherAPIResult = $scope.wheatherAPI.get(
        {
            q: $scope.city, 
            cnt: $scope.days
        }
    );

    $scope.convertToCelsius = function(degK){
        return Math.round(degK - 273.15) + "C";
    }

    $scope.convertToFahrenheit = function(degK){
        return Math.round((1.8 * (degK - 273)) + 32) + "F";
    }
    
    $scope.convertToDate = function(date){
        return new Date(date * 1000);
    }
}]);