const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionsSchema = new Schema(
    {
        question:{
            type:String,
            unique:true,
        }
    },
    {
        answers:
        {
            isRight:{
                type:String
            },
            content:{
                type:String
            }

        }
    }
)

const Question = mongoose.model("Question",questionsSchema)

module.exports = Question;