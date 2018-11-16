"use strict";

const express = require("express");
const cartItems = express.Router();
const cart = [
    {
        id: 0,
        product: "Apple",
        price: 2,
        quantity: 18,
    },
    {
        id: 1,
        product: "Pear",
        price: 1,
        quantity: 14,
    },
    {
        id: 2,
        product: "Pineapple",
        price: 3,
        quantity: 25,
    },
    {
        id: 3,
        product: "Dogs",
        price: 500,
        quantity: 5,
    },
];

cartItems.get("/cart-items", (req, res) => {
    res.json(cart);
});
cartItems.delete("/cart-items/:id", (req, res) => {
    cart.splice(req.params.id, 1);
    res.json(cart);
});
cartItems.post("/cart-items", (req, res) => {
    cart.push(req.body);
    res.json(cart);
});
cartItems.put("/cart-items/:id", (req, res) => {
    cart[req.params.id] = req.body;
    res.json(cart);
});

module.exports = cartItems;

