import express          from "express";
import dotenv           from "dotenv";
import cookieparser     from "cookie-parser";
import cors             from "cors";
import { connectDB }    from "./db/database.config.js";

import authRoutes       from "./routes/auth.route.js";
import messageRoutes    from "./routes/message.route.js";
import userRoutes       from "./routes/user.route.js";

import { app, server } from "./socket/socketio.js";

dotenv.config({
    path: "./.env",
});

const port  = process.env.PORT || 3000;
// const app   = express();

app.use(cors({
    origin: ['http://localhost:3000','http://192.168.0.102:3000'],
    credentials: true,
}));

app.use(express.json()) // {limit: '20kb'} For Accept form input
app.use(express.urlencoded({extended: 'false', limit: '20kb'})) //For Accept data from URL like id,queryParams etc
app.use(express.static("uploads"));
app.use(cookieparser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/user",userRoutes);

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
    connectDB();
});