// ROUTES
wheatherApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'pages/home.html',
        controller: 'mainController'
    })
    .when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });

    /*
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
    */
    
}]);