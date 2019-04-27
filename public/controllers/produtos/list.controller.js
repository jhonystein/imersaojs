angular.module('app')
    .controller('ProdutoListController', ProdutoListController);

function ProdutoListController(){
    var vm = this;
    vm.produtos = [];
}