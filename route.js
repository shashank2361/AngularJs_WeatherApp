
// ROUTES
weatherApp.config(function ($routeProvider ,$locationProvider ) {    <!--  -->
    $routeProvider.caseInsensitiveMatch = true;

    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
      
        .when('/forecast/:days', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
      
//            $locationProvider.html5Mode(true);

});