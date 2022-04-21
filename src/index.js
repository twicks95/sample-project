const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv/config");

const PORT = process.env.PORT;

const { HomeRouter } = require("./router/index");

// enable cors
// app.use(cors);

// app.use("/sample-app", HomeRouter);
app.use("/", (req, res) => {
    res.send("SAMPLE APP")
} );

app.listen(PORT, () => console.log("SERVER UP AND RUNNING ON PORT " + PORT));
