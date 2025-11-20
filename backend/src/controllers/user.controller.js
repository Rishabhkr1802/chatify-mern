import { getUsersForSidebarService } from "../services/user.service.js";

export async function getUsersForSidebar(req, res) {
  try {
    const myID = req.user?._id;

    const users = await getUsersForSidebarService(myID);
    return res.status(200).json({success: true, user: users});
    
  } catch (error) {
    console.log("Error occuring during getUsersForSidebar controller: ", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}