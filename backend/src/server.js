import express          from "express";
import dotenv           from "dotenv";
import cookieparser     from "cookie-parser";
import { connectDB }    from "./db/database.config.js";

import authRouter       from "./routes/auth.route.js";

dotenv.config({
    path: "./.env",
});

const port  = process.env.PORT || 3000;
const app   = express();

app.use(express.json({limit: '20kb'})) //For Accept form input
app.use(express.urlencoded({extended: 'false', limit: '20kb'})) //For Accept data from URL like id,queryParams etc
app.use(express.static("uploads"));
app.use(cookieparser());

app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
    connectDB();
});