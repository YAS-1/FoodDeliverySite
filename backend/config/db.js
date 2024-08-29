import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://YAS:Fantasy45#@cluster0.sne4q.mongodb.net/fooddeliverysite').then(()=>console.log("DB Connected"));
}

