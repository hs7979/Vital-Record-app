var mongoose = require("mongoose");

var detailsSchema = new mongoose.Schema({
    age:String,
    bloodtype:String,
    meddis:String,
    diabetic:{type:Boolean,default:false},
    height:String,
    weight:String,
    BMI:String,
    owner:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        username:String,
    }
});

module.exports = mongoose.model("details",detailsSchema);