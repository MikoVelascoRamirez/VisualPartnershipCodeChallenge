const express = require("express");
const app = express();
const Controller = require("../controllers/VisualPartnersController");

// Middlewares
app.use(express.json());

//Routes

app.get("/v1/students", (req, res) => {
    const getVisualPartners = new Controller().getVisualPartners();
    res.status(200).send({"request": "students", "data" : getVisualPartners});
});

app.get("/v1/emails", (req, res) => {
    res.status(200).send({"request": "students"});
});

module.exports = app;