import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema({
    name        : { type: String, required: true},
    email       : { type: String, required: true, unique : true, index : true},
    bio         : { type: String, default : "" },
    profilePic  : { type: String, default : "" },
    password    : { type: String, required: true, minlength : 6 },

},{timestamps: true});

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    try {
        const salt    = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
        console.log("Error occuring during hasing password", error)
    }
})

UserSchema.methods.matchPassword = async function(password){
    const isPasswordCorrect = await bcrypt.compare(password, this.password);
    return isPasswordCorrect;
}

const User = mongoose.model("User", UserSchema);
export default User;