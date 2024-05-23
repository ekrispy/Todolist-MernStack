import express from "express";

import 'dotenv/config';

import mongoConfig from "./config.js";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.json("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    mongoConfig();
})  
