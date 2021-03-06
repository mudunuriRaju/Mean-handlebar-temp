/**
 * Created by admin on 10/6/2016.
 */
'use strict';

angular.module('Kapp.createuser', ['ngRoute', 'ngAnimate', 'ngCookies'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/create_user', {
            templateUrl: 'views/users/create/createuser.html',
            controller: 'createUserCtrl'
        });
    }])

    .controller('createUserCtrl', ["$scope", "$cookies", "$location", 'API', function ($scope, $cookies, $location, API) {
        $scope.Login = Login;
        $scope.user = {
            username: '',
            password: ''
        };
        if ($cookies.get('userDetails')) {
            $location.path('dashboard');
        }
        function Login() {
            if ($scope.loginForm.username.$valid && $scope.loginForm.password.$valid) {
                $scope.user_id = API.Login.login($scope.user, function (res) {
                    if (res.Code == 200) {
                        //Increase login time by use the comment one
                        /*var now = new Date();
                         var time = now.getTime();
                         time += 3600 * 1000;
                         now.setTime(time);*/
                        //Login time of this is one day
                        var now = new Date();
                        now.setDate(expireDate.getDate() + 1);
                        $cookies.putObject('userDetails', res.Info, {'expires': now});
                        $location.path('dashboard');
                        //$cookies.put('userDetails',res)
                    } else {
                        /* swal({
                         title: '<a href="javascript:void(0)"><img src="/images/logo.png" alt="Prysmian Group"><br>',
                         html: 'The username/password does not exists',
                         width: "450px",
                         confirmButtonText: 'Ok'
                         });
                         $scope.loginForm.username.error = true;*/
                    }

                }, function (error) {
                    /*swal({
                     title: '<a href="javascript:void(0)"><img src="/images/logo.png" alt="Prysmian Group"><br>',
                     text: 'Opps Something went wrong try again later !!!',
                     width: "450px",
                     confirmButtonText: 'Ok'
                     });*/
                });
            }


        }
    }]);