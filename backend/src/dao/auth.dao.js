import User from "../models/User.model.js";

export async function findUserByEmail(email) {
    try {
        if (!email) return;
        const user = await User.findOne({email});
        return user;
    } catch (error) {
        console.log("Error occuring during findUserByEmailDao : ",error );
    }
}

export async function findUserById(id) {
    try {
        if (!id) return;
        const user = await User.findOne({id});
        return user;
    } catch (error) {
        console.log("Error occuring during findUserByIdDao : ",error );
    }
}

export async function createUser(user) {
    try {
        if (!user) return;
        const userDetails = {
            name        : user.name,
            email       : user.email,
            bio         : user.bio,
            profilePic  : user.profilePic,
            password    : user.password,
        }
        const newUser = await User.create(userDetails);
        return newUser;
    } catch (error) {
        console.log("Error occuring during findUserByIdDao : ",error );
    }
}