import express          from "express";
import dotenv           from "dotenv";
import cookieparser     from "cookie-parser";
import cors             from "cors";
import { connectDB }    from "./db/database.config.js";

import authRoutes       from "./routes/auth.route.js";
import messageRoutes    from "./routes/message.route.js";
import userRoutes       from "./routes/user.route.js";

import { app, server } from "./socket/socketio.js";

import path              from "path";   // For Deployment
import { fileURLToPath } from 'url';   // For Deployment

dotenv.config({
    path: "./.env",
});

const port  = process.env.PORT || 3000;
// const app   = express();

const __filename = fileURLToPath(import.meta.url);  // For Deployment
const __dirname  = path.dirname(__filename);        // For Deployment
// const __dirname = path.resolve();              // For Deployment

app.use(cors({
    origin: ['http://localhost:3000','http://192.168.0.102:3000'],
    credentials: true,
}));

app.use(express.json()) // {limit: '20kb'} For Accept form input
app.use(express.urlencoded({extended: false, limit: '20kb'})) //For Accept data from URL like id,queryParams etc
app.use(express.static("uploads"));
app.use(cookieparser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/user",userRoutes);

// For Deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));
    app.get("/*splat", (req, res) => {
        res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
    })
}

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
    connectDB();
});