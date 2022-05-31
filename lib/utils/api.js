const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Hey listen"});
    res.status(200);
});

app.get("/v1/students", (req, res) => {
    res.json({message: "hey"});
    res.status(200);
});

module.exports = app;