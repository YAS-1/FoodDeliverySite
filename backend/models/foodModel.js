import mongoose from "mongoose";

//creating a schema to use add new food items
const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    price: {type:Number,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true},
})


//creating a model to use the schema
const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);


export default foodModel;