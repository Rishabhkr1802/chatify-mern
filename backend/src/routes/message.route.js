import express from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { getAllMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/send/:id", protectedRoute, sendMessage);
router.get("/:id", protectedRoute, getAllMessages);

export default router;