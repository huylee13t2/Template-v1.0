
app.controller('CustomersController', function ($scope, customersService) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();

    function init() {
        $scope.customers = customersService.getCustomers();
    }

    // search customer
    $scope.searchBox = function(kw){
        $scope.customers = customersService.searchBox(kw);
    }

    // add customer
    $scope.addCustomer = function(obj){
        customersService.insertCustomer(obj.firstName, obj.lastName, obj.city);
    }

    // delete customer
    $scope.deleteCustomer = function (id) {
       console.log('delete = ' + id)
       customersService.deleteCustomer(id);
    };
});