import { Schema, model, models } from "mongoose";

const userSchema = newSchema({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        
    }
})