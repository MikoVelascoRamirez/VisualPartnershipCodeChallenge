const express = require("express");

const app = express();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Hey listen"});
    res.status(200);
});

module.exports = app;