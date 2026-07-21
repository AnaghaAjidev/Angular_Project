var app = angular.module('campus360',[]);

    app.controller("dashboardcontroller",function($scope) {


        $scope.collegename="FISAT";
        $scope.totalstudents="4500";
        $scope.totalfaculty="1500";

        console.log("dashboard controller is loaded");

        $scope.students=[
            "anagha","ananya","arya","jyothika"
        ];

        $scope.addstudents=function(){

            $scope.totalstudents++;
            $scope.showstudents=true;
            $scope.showDashboard=true;
        };

    });