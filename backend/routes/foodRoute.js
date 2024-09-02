import express from "express"
import { addFood  } from "../controllers/foodController.js"
import multer from "multer" // To create the image storage system

const foodRouter = express.Router(); // To use to create the different methods ie; GET,POST,DELETE...



// Image storage engine
const storage = multer.diskStorage({
    destination:"uploads", // The destination where the image will be stored "the uploads folder"
    filename:(req,file,cb) => {
        return cb(null,`${Date.now()} ${file.originalname}`) // The time stamp when the image is added is set as the file original name to make it unique
    }
})
const upload = multer({storage:storage}) // To use the storage engine in the router



// foodRouter
foodRouter.post("/add",upload.single("image"),addFood) // Used to send data on the server, when processed we get a response





export default foodRouter;
