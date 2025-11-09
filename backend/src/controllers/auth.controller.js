import { createUserService, findUserByEmailService } from "../services/auth.service.js";
import { generateJWTToken } from "../utils/helper.js";

export async function signup(req, res) {
    try {
        const { name, email, password } = req.body;
        const emailRegrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !password) return res.status(404).json({status: false, message: "All field are required"});
        if (!emailRegrex.test(email))     return res.status(400).json({ success: false, message: "Invalid Email format" })
        if (password.length < 6)          return res.status(404).json({status: false, message: "Password must be atleast 6 characters"});
        
        const existingUser = findUserByEmailService(email);
        if (existingUser) return res.status(404).json({status: false, message: "Email already register. Please use a different email"});

        const randomNumber = Math.floor(Math.random() * 100) + 1; //generate random number for pickup diff avatar image
        const randomAvatar = `https://avatar.iran.liara.run/public/${randomNumber}.png;`

        const userDetails = { name, email, password, profilePic: randomAvatar};
        const newUser = createUserService(userDetails);
        const token = generateJWTToken(newUser?._id);

        return res.status(201).json({status: true, message: "User has register succesfully"});
    } catch (error) {
        console.log("Error occuring during signup controller: ", error);
    }
}

export function login(req, res) {
    return res.status(200).json({status: true, message: "User login has successful"});
}

export function logout(req, res) {
    return res.status(200).json({status: true, message: "User has logout successfully"});
}