angular.module('intro')
.config(function($routeProvider, $locationProvider){
	$locationProvider.hashPrefix('');
	
	$routeProvider.when('/',{
		template:''
	})
});