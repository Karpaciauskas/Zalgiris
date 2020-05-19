const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const attacksSchema = new Schema(
    {
        id:{
            type:Number,
            unique:true
        },
        basedmg:{
            type:Number
        },
        basedf:{
            type:Number
        },
        forest:{
            type:Boolean
        },
        fields:{
            type:Boolean
        },
        river:{
            type:Boolean
        }
    }
)

const Attack = mongoose.model("Attack",attacksSchema)

module.exports = Attack;