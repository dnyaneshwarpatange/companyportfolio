require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/authRouter");
const conn = require("../server/utils/db");
const errorMiddleware = require("./middlewares/errorReportMiddleware");
app.use(express.json());


app.use(router);
app.use(errorMiddleware)
const port = 3000;

conn().then(()=>{
    app.listen(port,()=>{
        console.log("Server started")
    })

})
