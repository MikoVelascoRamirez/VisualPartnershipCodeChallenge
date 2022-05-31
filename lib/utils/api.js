const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

//Routes

app.get("/v1/students", (req, res) => {
    res.status(200).send({});
});

module.exports = app;