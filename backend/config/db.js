import mongoose from 'mongoose';

export const connectDB = async() => {
    await mongoose.connect
    ("mongodb+srv://Sandali:Sandali6254560@cluster0.nr70p.mongodb.net/food-del").then(()=> console.log("DB connected"))
}   

