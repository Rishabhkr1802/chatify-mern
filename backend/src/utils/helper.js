import jwt    from "jsonwebtoken";

export async function generateJWTToken(id, res) {
    const token = jwt.sign({userId:id}, process.env.JWT_SECRET, { expiresIn: "7d" });
    res.cookie("jwt", token, {
            maxAge: 24 * 7 * 60 * 60 * 1000,
            httpOnly: true, //prevent XSS attacks,
            sameSite: "strict", //prevent HTTP requests
            secure: process.env.NODE_ENV === "production",
        });
    return token;
}

export function verifyJWTToken(token) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decodedToken;
}