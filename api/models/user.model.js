import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true,
    },
    email: {
        type: String,
        required: true,
        unique : true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnXW-gXIK0mreik6iiQwfM6GjZoJa8IAuwbGZbYV1IXIoYFGT7-IPfi7OILQ&s"
    },
},{timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;