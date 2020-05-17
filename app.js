(function () {

    'use strict'

    angular.module('myApp',[])

    .controller('MyController',LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = "";
        $scope.ans = " ";
        $scope.checkValid = function () {
            var lunchString = checkString($scope.menu);
            $scope.ans =  lunchString;
        }

        function checkString(string){
            var listString = string.split(",");
            var flag = 0;
            for(var i=0;i<listString.length;i++){
                if(!listString[i].replace(/\s/g, '').length){
                    flag = 1;
                }
            }
            if(flag==1){
                return "Please enter data first";
            }else{
                if(listString.length<=3){
                    return "Enjoy!";
                }else{
                    return "Too much!";
                }
            }
        }
    }
}) ();