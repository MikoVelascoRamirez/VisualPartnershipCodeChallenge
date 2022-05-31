const express = require("expŕess");

const app = express();

// Middlewares
app.use(express.json());

module.exports = app;