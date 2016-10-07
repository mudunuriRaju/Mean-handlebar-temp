/**
 * @ngdoc service
 * @name Kapp:commonFilter
 *
 * @description
 *
 *
 * */
Kapp.filter('searchInCollection', function () {
    //console.log(input);
    return function (propertyName, propertyValue, collection) {
        try {
            if (collection != 'undefined') {
                var i = 0,
                    len = collection.length;
                for (i; i < len; i++) {
                    if (collection[i][propertyName] == propertyValue) {
                        return collection[i];
                    }
                }
            }
        } catch (err) {
            return null;
        }


    }
});
Kapp.filter('searchInCollectionUserID', function () {
    //console.log(input);
    return function (propertyName, propertyValue, collection) {
        try {
            if (collection != 'undefined') {
                var i = 0,
                    len = collection.length;
                for (i; i < len; i++) {
                    var j = 0,
                        lena = collection[i][propertyName].length;
                    for (j; j < lena; j++) {
                        if (collection[i][propertyName][j].user_id == propertyValue) {
                            console.log(collection[i])
                            return collection[i];
                        }
                    }
                }
            }
        } catch (err) {
            return null;
        }


    }
});
Kapp.filter('setPadZeros', function () {
    //console.log(input);
    return function (num, size) {
        try {
            var s = num + "";
            while (s.length < size) s = "0" + s;
            return s;
        } catch (err) {
            return null;
        }


    }
});
Kapp.filter('changeStringToDate', function () {
    //console.log(input);
    return function (str) {
        var res = str.split("");
        var year = "";
        var month = "";
        var day = "";
        for (var i = 0; i < res.length; i++) {
            if (i < 4) {
                year += res[i];
            } else {
                if (i > 5) {
                    day += res[i];
                } else {
                    month += res[i];
                }
            }
        }
        return month + "/" + day + "/" + year;
    }
});

