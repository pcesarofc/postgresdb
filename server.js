import express from "express";

import { DatabaseNeon } from "./database.js";

// CREATE THE APP
const app = express();


// CREATE THE DATABASE INSTANCE
const database = new DatabaseNeon();


// CREATE A NEW PROJECT
app.get('/projects', async (req, res) => {
    const projects = await database.list()

    return res.status(201).send(projects)
})


const PORT = process.env.PORT ?? 3000;
const HOST = '0.0.0.0';

// START THE APP
app.listen(PORT, HOST, () => {});
