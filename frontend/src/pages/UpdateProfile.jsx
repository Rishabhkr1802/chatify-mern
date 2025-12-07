import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileThunk } from "../store/AuthSlice";
import { Camera, Mail, ReceiptText, User } from "lucide-react";
import { toast } from "react-hot-toast";
import Container from "../sharedComponents/Container";

function UpdateProfile() {
  const dispatch = useDispatch();
  const { user, isUpdateProfile } = useSelector((state) => state.auth);
  const [formData, setFormData]   = useState({ bio: user?.bio || "", profilePic: user?.profilePic || "" });

  async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setFormData(prev => ({ ...prev, profilePic: base64Image }));
    };
  };

  async function handleSubmit(event) {
      event.preventDefault();
      try {
        const resultAction = await dispatch(updateProfileThunk(formData));
        if (updateProfileThunk.fulfilled.match(resultAction)) {
          toast.success(resultAction?.payload?.messages || "Update Profile Successfull!!!");
        } else {
          toast.error(resultAction.payload || "Failed to update profile");
        }
      } catch (err) {
        toast.error("Something went wrong!");
      }
    }

  return (
    <Container className="pt-20" heading={"Update Profile"}>
      <div className="max-w-2xl mx-auto p-4 py-8">
        <div className="bg-base-300 rounded-xl p-6 space-y-8">
          <div className="text-center">
            <p className="mt-2">Your profile information</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img src={ formData.profilePic || user.profilePic } alt="Profile" className="size-32 rounded-full object-cover border-4"/>
              <label htmlFor="avatar-upload" className={`absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer 
                  transition-all duration-200 ${isUpdateProfile ? "animate-pulse pointer-events-none" : ""}`}>
                <Camera className="w-5 h-5 text-base-200" />
                <input type="file" id="avatar-upload" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={isUpdateProfile} />
              </label>
            </div>
            <p className="text-sm text-zinc-400">
              {isUpdateProfile ? "Uploading profile image..." : "Click the camera icon to update your photo"}
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <User className="w-4 h-4" /> Full Name
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border cursor-not-allowed">{user?.name}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email Address
              </div>
              <p className="px-4 py-2.5 bg-base-200 rounded-lg border cursor-not-allowed">{user?.email}</p>
            </div>

            <div className="space-y-1.5">
              <div className="text-sm text-zinc-400 flex items-center gap-2">
                <ReceiptText className="w-4 h-4" /> Bio
              </div>
              <textarea rows={4} name="bio" className="px-4 py-2.5 bg-base-200 rounded-lg border w-full" value={formData.bio} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}>{user?.bio}</textarea>
            </div>

            <button className="btn btn-primary rounded shadow" onClick={handleSubmit}>{isUpdateProfile ? "Updating...": "Update Profile"}</button>
          </div>

          <div className="mt-6 bg-base-300 rounded-xl p-6">
            <h2 className="text-lg font-medium  mb-4">Account Information</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-zinc-700">
                <span>Member Since</span>
                <span>{user.createdAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>Account Status</span>
                <span className="text-green-500">Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default UpdateProfile;