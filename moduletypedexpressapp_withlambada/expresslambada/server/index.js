// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require ('cors');
// const serverless = require ('serverless');

import express from 'express'
import dotenv from 'dotenv'
import cors  from 'cors'
import serverless from 'serverless-http'


//dotenv config
dotenv.config();

//appconfig

const app = express();
// const PORT = process.env.PORT;


//middlewares

app.use(express.json({limit: "60mb"}));
app.use(express.urlencoded({extended: true, limit: "60mb"}))
app.use(cors({
    origin: "*"
}))

//database config

//routes
app.get("/api", async (req, res) => {
    res.send("hello world!!!!!")
})
app.get("/wish", async (req, res) => {
    res.send("hello world!!!!! you are welcome")
})


// app.listen(PORT, () => {
//     console.log("server running on the port ", PORT)
// })


export const handler = serverless(app)
