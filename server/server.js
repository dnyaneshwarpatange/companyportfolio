require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/authRouter");
const conn = require("../server/utils/db");
const errorMiddleware = require("./middlewares/errorReportMiddleware");
const cors = require("cors");

app.use(express.json());

// Updated CORS Configuration to include localhost
const corsOptions = {
    origin: ["https://itsoln.vercel.app", "http://localhost:5173"], // Allow both the live and local development URLs
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Ensure credentials is true if needed for cookies/auth
};

app.use(cors(corsOptions)); // Apply the CORS middleware with the updated options

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
