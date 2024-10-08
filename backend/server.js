import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";



// The app config
const app = express();
const port = 4000; // port to be used




// middleware
app.use(express.json()) // For parsing requests from frontend to backend
app.use(cors()) // Enables us to access the backend from any frontend





// DB CONNECTION
connectDB();





// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));




// The get method
app.get("/",(req,res)=>{

    res.send("API working") // Response sent when ever the endpoint is opened

}) // The get method is an HTTP method used to request data from the server





app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
}) // To run the server




