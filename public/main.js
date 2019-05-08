angular.module('app', [
    'ui.router'
]);

angular.module('app').config(ConfigMain);

ConfigMain.$inject = ['$stateProvider'];

function ConfigMain ($stateProvider) {
    $stateProvider
        .state({
            name: 'clienteList',
            url: '/clientes',
            templateUrl: '/partials/clientes/list.html',
            controller: 'ClienteListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteNovo',
            url: '/clientes/novo',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'clienteEditar',
            url: '/clientes/:id',
            templateUrl: '/partials/clientes/form.html',
            controller: 'ClienteFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'produtoList',
            url: '/produtos',
            templateUrl: '/partials/produtos/list.html',
            controller: 'ProdutoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'produtoNovo',
            url: '/produtos/novo',
            templateUrl: '/partials/produtos/form.html',
            controller: 'ProdutoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'produtoEditar',
            url: '/produtos/:id',
            templateUrl: '/partials/produtos/form.html',
            controller: 'ProdutoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'pedidoList',
            url: '/pedidoss',
            templateUrl: '/partials/pedidos/list.html',
            controller: 'PedidoListController',
            controllerAs: 'vm'
        })
        .state({
            name: 'pedidoNovo',
            url: '/pedidos/novo',
            templateUrl: '/partials/pedidos/form.html',
            controller: 'PedidoFormController',
            controllerAs: 'vm'
        })
        .state({
            name: 'pedidoEditar',
            url: '/pedidos/:id',
            templateUrl: '/partials/pedidos/form.html',
            controller: 'PedidoFormController',
            controllerAs: 'vm'
        });
}
