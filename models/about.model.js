const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const aboutSchema = new Schema(
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

const About = mongoose.model("About",aboutSchema)

module.exports = About;