require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/authRouter");
const conn = require("../server/utils/db");
const errorMiddleware = require("./middlewares/errorReportMiddleware");
app.use(express.json());
const cors = require("cors");


const corsOption = {
    origin:"https://mitsoln.vercel.app/*",
    methods:"GET, POST, PUT, DELETE",
    credential:true,
}
app.use(cors(corsOption));

app.use(router);
app.use(errorMiddleware)
const port = 3000;

conn().then(()=>{
    app.listen(port,()=>{
        console.log("Server started")
    })

})
