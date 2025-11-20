import User from "../models/User.model.js";

export async function getUsersForSidebarDao(userID) {
  try {
    if (!userID) return;

    const filterUser = await User.find({ _id: { $ne: userID } }).select("-password");
    return filterUser;
  } catch (error) {
    console.log("Error occuring during getUsersForSidebarDao: ", error);
  }
}