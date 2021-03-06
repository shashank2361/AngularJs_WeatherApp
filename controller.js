//Controller


// CONTROLLERS
weatherApp.controller('homeController', ['$scope' , '$location' , 'cityService' , function($scope , $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city',function(){
        
        cityService.city =     $scope.city  ;
    })
    
    
    $scope.submit = function(){
        
        $location.path("/forecast")
    }
    
}]);




weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams' , '$route', '$log' , 'cityService' , function($scope , $resource, $routeParams,  $route ,$log ,cityService) {
        $scope.city = cityService.city; 
    
    $log.info($routeParams.days);
    $scope.days = ( $routeParams.days * 8  )  || 40 ;
    
    $scope.dayClass = $routeParams.days;
//    http://api.openweathermap.org/data/2.5/weather    http://api.openweathermap.org/data/2.5/forecast?  http://api.openweathermap.org/data/2.5/forecast/daily
        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast",{

            callback:"JSON_CALLBACK" }, {get:{
                method:"JSONP"
            }});
    
    $scope.weatherAPIResult = $scope.weatherAPI.get({
        q: $scope.city    ,
        cnt:  $scope.days,
        APPID:'56ca01c6c59e4ee40a858764801d4ee1'
        
    })
    $scope.convertToFahrenheit = function(degK){
        
        return Math.round((1.8 * (degK - 273 )) + 32);
    }
    
    $scope.convertToDate = function(dt){
        
        return new Date(dt * 1000);
    }
    
     
    console.log( $scope.weatherAPIResult);
}]);


