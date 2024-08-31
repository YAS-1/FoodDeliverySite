import foodModel from "../models/foodModel.js";
import fs from "fs" 


//add food item
// To use to add and store product data in database
const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    // creating a new food using the food model
    const newFood = new foodModel({
        
        name: req.body.name, // food name is got from the name field
        description: req.body.description, // description is got from the description field
        price: req.body.price, // price is got from the price field
        category:req.body.category, // category is got from the category field
        image: image_filename // image filename is got from the image field
    })
}

export {addFood}