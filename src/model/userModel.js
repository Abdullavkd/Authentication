import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email should be unique"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }
})

export const userModel = mongoose.model("user", userSchema);