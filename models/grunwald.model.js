const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const grunwaldSchema = new Schema(
    {
        id:{
            type:Number,
            unique:true
        },
        text:{
            type:String
        }
    }
)

const Grunwald = mongoose.model("Grunwald",grunwaldSchema)

module.exports = Grunwald;