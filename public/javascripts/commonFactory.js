/**
 * @ngdoc service
 * @name PGapp:commonFactory
 *
 * @description
 *
 *
 * */
var post_set = {
    method: 'POST',
    isArray: false,
    headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Accept': '*/*'},
    transformRequest: function (data, headersGetter) {
        var str = [];
        for (var d in data)
            str.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
        return str.join("&");
    }
};
Kapp.factory('API', ['$resource', function ($resource, $scope) {
    var url = "/";
    var Service = {
        Login: $resource(url + 'api', {id: '@id'}, {
            login: post_set
        }),
        Users: $resource(url + 'api/userlist', {}, {
            Recent: post_set
        }),
        Create: $resource(url + 'api/createuser', {}, {
            User: post_set
        }),
        ChangePassword: $resource(url + 'api/changepassword', {}, {
            save: post_set
        }),
        EditUser: $resource(url + 'api/edit_user', {}, {
            User: post_set
        }),
        GetUserDetails: $resource(url + 'api/get_user_details', {}, {
            Recent: post_set
        }),
    };

    return Service;
}]);
