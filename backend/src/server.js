import express          from "express";
import dotenv           from "dotenv";
import { connectDB }    from "./db/database.config.js";

dotenv.config({
    path: "./.env",
});

const port  = process.env.PORT || 3000;
const app   = express();

app.express()

app.listen(() => {
    console.log(`Server is running at ${port}`);
    connectDB();
});