import { getUsersForSidebarDao } from "../dao/user.dao.js";

export async function getUsersForSidebarService(userID) {
  try {
    if (!userID) return;

    const allUsers = await getUsersForSidebarDao(userID);
    return allUsers;
  } catch (error) {
    console.log("Error occuring during getUsersForSidebarService: ", error);
  }
}