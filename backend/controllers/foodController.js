import foodModel from "../models/foodModel.js";
import fs from "fs" 


//add food item ("api")
// To use to add and store food item data in database
const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    // creating a new food using the food model
    const food = new foodModel({
        
        name: req.body.name, // food name is got from the name field
        description: req.body.description, // description is got from the description field
        price: req.body.price, // price is got from the price field
        category:req.body.category, // category is got from the category field
        image: image_filename // image filename is got from the image field

    }) // When ever food details are entered in the body, we shall access the data using this function through the using api


    // Try and catch block to catch any errors
    try {
        await food.save(); // Food item will be saved in the database
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
} 


//all food list ("api")
const listFood = async (req,res) =>{
    try {
        const foods = await foodModel.find() // find all food items in the foodModel database
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}



// remove food item ("api")
// To use to remove food item data from database
const removeFood = async (req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id); // Used to find the food item we want to find by using the id assigned to it by the database and the details are saved in the variable food
        fs.unlink(`uploads/${food.image}`,() => {}) // The fs unlink method is used to delete a file from a directory. The unlink deletes the food item's image from the uploads folder

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food item removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


export {addFood,listFood,removeFood}