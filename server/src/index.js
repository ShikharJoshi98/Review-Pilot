const express = require("express");
const config = require("./config/config");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const apiRoutes = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

app.get("/", (req, res) => {
    res.send("API running ...");
});

app.use("/api", apiRoutes);

app.use(errorHandler);

app.listen(config.PORT, () => {
    console.log(`Server listening on port ${config.PORT}`);
});