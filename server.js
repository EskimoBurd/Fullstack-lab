"use strict";

const express = require("express");
const app = express();
const cartItems = require("./cart-items.js");
//whatever we wanna communicate with

app.use(express.static("./public"));
// same thing as right above this
app.use(express.json());
app.use("/", cartItems)

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})