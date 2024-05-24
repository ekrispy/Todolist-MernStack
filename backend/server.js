import express from "express";

import cors from "cors";

import 'dotenv/config';

import mongoConfig from "./config.js";

import todoRoutes from "./routes/todoRoutes.js";


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
    res.json("Hello World!");
});



app.listen(port, () => {
    console.log(` app listening at http://localhost:${port}`)
    mongoConfig();
})  
