// Controller
wheatherApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;
    // Value can change
    $scope.$watch('city', function(){
        cityService.city = $scope.city;   
    });
    $scope.Adress = "American University,4400 Massachusetts Ave NW,Washington, DC 20016";
    $scope.Area = { 
                    Name: "Melbourne", 
                    Latitude: -37.8140000, 
                    Longitude: 144.9633200 
                  };
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
}]);

wheatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', 'usSpinnerService', function($scope, $resource, $routeParams, cityService, usSpinnerService){
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '1';
    usSpinnerService.spin('spinner');
    
    $scope.wheatherAPI = 
        $resource("//api.openweathermap.org/data/2.5/forecast/daily", 
            {
                Callback: "JSON_CALLBACK"
            },
            {
                get: { method: "JSONP"}
            }
        );
    
    $scope.wheatherAPI.get(
        {
            q: $scope.city, 
            cnt: $scope.days
        }
    ).$promise.then(function(data) {
        $scope.wheatherAPIResult = data;
        usSpinnerService.stop('spinner');
    }, function(reason) {
        console.log('Failed:');
        console.log(reason);
        usSpinnerService.stop('spinner');
    });

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