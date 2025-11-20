import express from "express";
import { protectedRoute } from "../middlewares/auth.middleware.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/get-all-users", protectedRoute ,getUsersForSidebar);

export default router;