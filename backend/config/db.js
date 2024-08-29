import mongoose from "mongoose";

// URL FROM THE DATABASE

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://YAS:Fantasy45@cluster0.bknjj.mongodb.net/fooddeliverysite').then(()=>console.log("DB Connected"));
}

