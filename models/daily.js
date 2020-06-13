var mongoose = require("mongoose");

var dailySchema = new mongoose.Schema({
    date:{type:Date,default:Date.now},
    BP:{
        Systole:String,
        Diastole:String,
        pulse:String
    },
    o2:String,
    glucose:String,
    temp:String,
    sleep:String,
    owner:{
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        username:String,
    }
});

module.exports = mongoose.model("daily",dailySchema);
