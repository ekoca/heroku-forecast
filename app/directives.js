wheatherApp.directive("weatherReport", function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/wheatherReport.html',
        replace: true,
        scope: {
            weatherDay: "=",
            convertToFahrenheit: "&",
            convertToCelsius: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
});