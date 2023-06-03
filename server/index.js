import express from "express";
import dotenv from "dotenv"
import Connection from "./database/db.js";



const app = express();

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = 8000;
app.listen(PORT,()=> console.log(`server is running successfully on PORT ${PORT}`));
Connection(USERNAME,PASSWORD);
