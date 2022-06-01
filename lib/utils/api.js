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
    const getVisualPartnersCertificated = new Controller().getPartnersWithCertifications();
    res.status(200).send({"request": "visualPartnersCertificated", "data" : getVisualPartnersCertificated});
});

app.get("/v1/credits", (req, res) => {
    res.status(200).send({"request": "credits"});
});

module.exports = app;