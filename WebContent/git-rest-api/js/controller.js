(
		function()
		{
			var app = angular.module('github', []);
			app.controller('MainController',['$scope', '$http',function($scope, $http){
				$scope.titulo = 'Acesso a API Rest do GitHub';
				
				$scope.search = function(username){
					$http.get('https://api.github.com/users/'+username).then(onUserComplete, onError);
				};
				
				var onUserComplete = function(response){
						$scope.user = response.data;
						$http.get($scope.user.repos_url).then(onResp, onError);
				};
				
				var onResp = function(response){
					$scope.repos = response.data;
				};
				
				var onError = function(reason){
					$scope.error = 'Ops.. there is on error '+reason;
				};
				
			}]);
	}()
);