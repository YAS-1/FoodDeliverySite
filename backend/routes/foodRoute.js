import express from "express"
import { addFood, listFood, removeFood  } from "../controllers/foodController.js"
import multer from "multer" // To create the image storage system

const foodRouter = express.Router(); // To use to create the different methods ie; GET,POST,DELETE...



// Image storage engine
// creating a storage configuration object "storage"
const storage = multer.diskStorage({
    destination:"uploads", // The destination where the image will be stored "the uploads folder"
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()} ${file.originalname}`) // The time stamp when the image is added is set as the file original name to make it unique
    }
})

// Creating the "upload" middleware to handle the file upload process and saving
const upload = multer({storage:storage}) // To use the storage engine in the router



// foodRouter endpoints
// foodRouter.post sends a request to the server through the end point "/add" to complete two tasks ie: 1 to upload the file entered within the image form field to the specified destination. 2 To execute the addFood function
foodRouter.post("/add",upload.single("image"),addFood) // Used to send data on the server, when processed we get a response

// foodRouter.get is used to retrieve data from the server through end point "/list" the function with the listFood api is executed displaying all the data within the foodModel database
foodRouter.get("/list",listFood); // Used to retrieve data from the server

// foodRouter.post is used to retrieve data from the server through end point "/remove" the function with the removeFood api is executed removing the selected food item from the foodModel database
foodRouter.post("/remove",removeFood) 




export default foodRouter;
