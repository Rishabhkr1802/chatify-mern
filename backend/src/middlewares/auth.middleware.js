import { findUserByIdService } from "../services/auth.service.js";
import { verifyJWTToken } from "../utils/helper.js";

export async function protectedRoute(req, res, next) {
    try {
        const token = req.cookies.jwt;
        if (!token) return res.status(403).json({ status: false, message: "Unauthorized! No Token provided" });

        const decodedToken = verifyJWTToken(token);
        if (!decodedToken) return res.status(403).json({ status: false, message: "Unauthorized! Invalid token" });

        const user = await findUserByIdService(decodedToken.userId);
        if (!user) return res.status(403).json({ status: false, message: "Unauthorized! user not found" });

        req.user = user;
        next();
    } catch (error) {
        console.log("Error occur during auth middleware: ", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}