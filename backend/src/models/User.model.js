import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name        : { type: String, required: true},
    email       : { type: String, required: true, unique : true, index : true},
    bio         : { type: String, default : "" },
    profilePic  : { type: String, default : "" },
    password    : { type: String, required: true, minlength : 6 },

},{timestamps: true});

const User = mongoose.model("User", UserSchema);
export default User;