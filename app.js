var app = angular.module("myApp", []); 
app.controller('empcontroller',function($scope){
$scope.emparr = [];
$scope.btnclk = function () {

                if (!$scope.id)
                {
                    alert("Enter ID");
                }
                else if (!$scope.name)
                {
                    alert("Enter Name");
                }
                else if (!$scope.desg) {
                    alert("Enter Designation");
                }
                else {
                $scope.emparr.push({ 'arr_id': $scope.id, 
            'arr_name': $scope.name, 'arr_desg': $scope.desg });
                $scope.id = '';
                $scope.name = '';
                $scope.desg = '';
                }
                console.log($scope.emparr)
            };

            var key;
            $scope.edit = function (emp, indx) {
                key = indx;                
                $scope.id = emp.arr_id;
                $scope.name = emp.arr_name;
                $scope.desg = emp.arr_desg;
};
$scope.btnupd = function (id, name, desg) {
	console.log(id,name,desg)
                $scope.emparr[key].arr_id = id;
                $scope.emparr[key].arr_name = name;
                $scope.emparr[key].arr_desg = desg;
                $scope.id = '';
                $scope.name = '';
                $scope.desg = '';
            };
            $scope.del = function (id) {
                $scope.emparr.splice(id, 1);
           };

})