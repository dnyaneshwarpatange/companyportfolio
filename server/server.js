require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/authRouter");
const conn = require("../server/utils/db")
app.use(express.json());


app.use(router);
const port = 3000;

conn().then(()=>{
    app.listen(port,()=>{
        console.log("Server started")
    })

})
