import { createUser, findUserByEmail, findUserById } from "../dao/auth.dao.js";

export async function findUserByEmailService(email) {
    if (!email) return;
    try {
        const user = await findUserByEmail(email);
        return user;
    } catch (error) {
        console.log("Error occuring during findUserByEmailService: ", error);
    }
}

export async function findUserByIdService(id) {
    if (!id) return;
    try {
        const user = await findUserById(id);
        return user;
    } catch (error) {
        console.log("Error occuring during findUserByIdService: ", error);
    }
}

export async function createUserService(user) {
    if (!user) return;
    try {
        const newUser = await createUser(user);
        return newUser;
    } catch (error) {
        console.log("Error occuring during createUserService: ", error);
    }
}

