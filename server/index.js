require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());

const routes = require("./routes");
app.use("/api", routes());

app.listen('8080', () => {
    console.log("server is running on port 8080");
})
