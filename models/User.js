import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        _id: {type: Stirng, required: true},
        name: {type: Stirng, required: true},
        email: {type: Stirng, required: true},
        imqge: {type: Stirng, required: true}
    },
    {timestamps: true}
);


const User = mongoose.models.User || mongoose.model("User", UserSchema)

export default User;