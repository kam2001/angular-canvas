angular
    .module('contractorsApp', ['ui.bootstrap'])
    .controller('ContractorsCtrl', function($scope,$http,$routeParams) {
        $http.get('contractors.php').success(function(data) {
            $scope.contractors = data;
        })
        $scope.submit = function(){
            data = {
                'new_name' : $scope.new_name,
                'no_miles' : $scope.no_miles,
                'no_city' : $scope.no_city,
                'no_state' : $scope.no_state,
                'no_price' : $scope.no_price,
                'no_phone' : $scope.no_phone,
                'no_email' : $scope.no_email,
                'no_password' : $scope.no_password,
                'no_description' : $scope.no_description
            };

            $http({
                method: 'POST',
                url: 'post_json.php',
                data: data,
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
            })
                .success(function(data, status, headers, config)
                {
                    console.log(status + ' - ' + data );
                })
                .error(function(data, status, headers, config)
                {
                    console.log('error');
                });
        }
        $scope.remove = function(index) {

            $scope.contractors.splice(index, 1)
        }
    })
    .controller('RecruitersCtrl', function($scope, $http) {

        $http.get('recruiters.json').success(function(data) {

            $scope.recruiters = data;
        })
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when('/list', {templateUrl: 'partials/contractors-list.html', controller:'ContractorsCtrl' })
            .when('/contractors', {templateUrl: 'contractors.html', controller:'ContractorsCtrl' })
    })