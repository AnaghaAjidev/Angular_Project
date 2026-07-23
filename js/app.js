var app = angular.module('campus360', []);

app.controller("dashboardcontroller", function ($scope) {


    $scope.collegename = "FISAT";
    $scope.totalstudents = 1200;
    $scope.totalfaculty = 1500;
    $scope.collegeId = "FISAT001";

    console.log("dashboard controller is loaded");

    $scope.students = [
        "anagha", "ananya", "arya", "jyothika"
    ];

  
        $scope.showstudents = false;
        $scope.showDashboard = true;

        $scope.fees = 25000;
        $scope.today = new Date();

        $scope.departments=[
            "CSE","MCA","MBA","MCOM","ECE","IMCA","BCA"
        ];

        $scope.selectedDept = "MCA";


        $scope.isDisabled = true;
        $scope.allowAdmission = function(){

            $scope.isDisabled = false;
        };


        $scope.isReadOnly = true;
        $scope.toggleReadOnly = function (){
            
            $scope.isReadOnly = !$scope.isReadOnly;
        };


        $scope.student={};

        $scope.registerstudent = function(){

            alert("Student Registered Successfully")
        };

    $scope.addstudents = function () {
        $scope.totalstudents++;
    };

});