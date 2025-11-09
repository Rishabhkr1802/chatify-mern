import jwt    from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
    path: "./../.env",
});

export async function generateJWTToken(id) {
    const token = jwt.sign({userId:id, process.env.PORT, { expiresIn: "7d" }});
    res.cookie("jwt", token, {
            maxAge: 24 * 7 * 60 * 60 * 1000,
            httpOnly: true, //prevent XSS attacks,
            sameSite: "strict", //prevent HTTP requests
            // secure: true,
            secure: process.env.NODE_ENV === "production",
        });
    return token;
}