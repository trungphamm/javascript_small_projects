angular.module("myShoppingList", []).controller("myCtrl", function($scope) {
    $scope.produkte = ["Milch", "Brot", "Kaese"];
    $scope.addFunction = () => {
        $scope.errorText = "";
        if (!$scope.add) {return;}
        if ($scope.produkte.indexOf($scope.add) == -1) {
            $scope.produkte.push($scope.add);            
        } else {
            $scope.errorText = "Das Produkt steht schon auf dem List."
        }
    }
    $scope.removeFunction = index => {
        $scope.produkte.splice(index, 1);
    }
});