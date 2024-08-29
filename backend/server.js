import express from "express";
import cors from "cors"


// The app config
const app = express();
const port = 4000;

// middleware
app.use(express.json()) // For parsing requests from frontend to backend
app.use(cors()) // Enables us to access the backend from any frontend


// The get method
app.get("/",(req,res)=>{
    
}) // HTTP method used to request data from the server
