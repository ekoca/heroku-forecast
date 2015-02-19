// ROUTES
wheatherApp.config(['$routeProvider', '$analyticsProvider', '$locationProvider', function ($routeProvider, $analyticsProvider, $locationProvider){
    // Turn off automatic tracking
    $analyticsProvider.virtualPageviews(false);

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
    }).otherwise({ redirectTo: '/' });

    /*
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
    */
}]);