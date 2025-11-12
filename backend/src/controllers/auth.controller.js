import { createUserService, findUserByEmailService, findUserByIdAndUpdateService } from "../services/auth.service.js";
import { generateJWTToken } from "../utils/helper.js";
import cloudinary from "../utils/cloudinary.js";

export async function signup(req, res) {
    try {
        const { name, email, password } = req.body;
        const emailRegrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !password) return res.status(400).json({success: false, message: "All field are required"});
        if (!emailRegrex.test(email))     return res.status(400).json({success: false, message: "Invalid Email format" })
        if (password.length < 6)          return res.status(400).json({success: false, message: "Password must be atleast 6 characters"});
        
        const existingUser = await findUserByEmailService(email);
        if (existingUser) return res.status(400).json({success: false, message: "Email already register. Please use a different email"});

        const randomNumber = Math.floor(Math.random() * 100) + 1; //generate random number for pickup diff avatar image
        const randomAvatar = `https://avatar.iran.liara.run/public/${randomNumber}.png;`;

        const userDetails = { name, email, password, profilePic: randomAvatar};
        const newUser = await createUserService(userDetails);
        generateJWTToken(newUser?._id, res);

        return res.status(201).json({status: true, message: "User has register succesfully", user: newUser});
    } catch (error) {
        console.log("Error occuring during Signup controller: ", error);
        return res.status(500).json({status: false, message: "Internal Server Error"});
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const emailRegrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !password)        return res.status(400).json({ success: false, message: "All field are required"});
        if (!emailRegrex.test(email))   return res.status(400).json({ success: false, message: "Invalid email format"});
        if (password.length < 6)        return res.status(400).json({success: false, message: "Password must be atleast 6 characters"});

        const user = await findUserByEmailService(email);
        if (!user) return res.status(400).json({ success: false, message: "Invalid Email"});

        const isPasswordCorrect = await user.matchPassword(password);
        if (!isPasswordCorrect) return res.status(400).json({success: false, message: "Invalid Password"});

        const token = await generateJWTToken(user?._id, res);
        if (!token) return res.status(401).json({success: false, message: "Something went wrong"});

        const userOj = user.toObject();
        delete userOj?.password;

        return res.status(200).json({status: true, message: "Login Successfully", user: userOj, token});

    } catch (error) {
        console.log("Error occur during Login controller: ", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export function logout(req, res) {
    try {
        res.clearCookie('jwt');
        return res.status(200).json({status: true, message: "Logout Successfully"});
    } catch (error) {
        console.log("Error occur during Logout controller: ", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export async function updateProfile(req, res) {
    try {
        const { bio, profilePic } = req.body;
        const userID = req.user?._id;
        if (!bio || !profilePic) return res.status(400).json({success: false, message: "All fields are required"});

        const uploadImageToCloudinary = await cloudinary.uploader.upload(profilePic);
        const imageUrl = uploadImageToCloudinary.secure_url;

        const updatedUser = await findUserByIdAndUpdateService(userID, {profilePic: imageUrl, bio});
        return res.status(200).json({ success: true, message: "User information has updated successfully", updatedUser });

    } catch (error) {
        console.log("Error occur during updateProfile controller: ", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}

export async function checkAuth(req, res) {
    try {
        const myId = req?.user;
        return res.status(200).json({status: true, message: "Autheticated", user: myId});
    } catch (error) {
        console.log("Error occur during checkAuth controller: ", error);
        res.status(500).json({success: false, message: "Internal Server Error"});
    }
}