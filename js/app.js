var app = angular.module('miniRoute', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'js/home/homeTmpl.html',
			controller: 'homeCtrl'
		})
		.when('/products/:id', {
			templateUrl: 'js/products.productsTmpl.html',
			controller: 'productsCtrl'
		})
		.when('settings', {
			templateUrl: 'js/settings/settingTmpl.html',
			controller: 'settingsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
});