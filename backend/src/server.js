import express          from "express";
import dotenv           from "dotenv";
import { connectDB }    from "./db/database.config.js";

import authRouter       from "./routes/auth.route.js";

dotenv.config({
    path: "./.env",
});

const port  = process.env.PORT || 3000;
const app   = express();

app.use(express.json({limit: "5mb"}))

app.use("/api/v1/auth", authRouter);

app.listen(() => {
    console.log(`Server is running at ${port}`);
    connectDB();
});