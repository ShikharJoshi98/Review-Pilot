const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/", (req, res) => {
    res.send("API running ...");
});

app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
});