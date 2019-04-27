angular.module('app')
    .controller('ProdutoFormController', ProdutoFormController);

function ProdutoFormController(){
    var vm = this;
    vm.produto = {};
}