import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb+srv://jayawardhanasandali2:Sandali6254560@cluster0.tzyx1.mongodb.net/food-del").then(()=> console.log("DB connected)"))
}   