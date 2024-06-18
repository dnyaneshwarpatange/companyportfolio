require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/authRouter");
const conn = require("../server/utils/db");
const errorMiddleware = require("./middlewares/errorReportMiddleware");
const cors = require("cors");

app.use(express.json());

// Correct CORS Configuration
const corsOptions = {
    origin: "https://mitsoln.vercel.app", // Ensure this matches your frontend URL exactly
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Note: it's "credentials" not "credential"
};

app.use(cors(corsOptions)); // Apply the CORS middleware with the options

app.use(router);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

conn().then(() => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to connect to the database', err);
});
