"use strict";

const items = {
    template:`
    
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        vm.getAllItems = () => {
            CartService.getAllItems().then((response) => {
                vm.cartItems = response.data
            });
        };
    }]
};

angular
    .module("ShoppingCart")
    .component("items", items)