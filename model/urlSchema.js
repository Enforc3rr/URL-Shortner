const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    altUrlName:{
        type:String,
        unique:true,
        required:true,
        maxlength:[10,"Name Cannot Be More Than 10 Letters"]
    },
    originalUrl:{
        type:String,
        unique:true,
        required:true
    },
    newUrl:String
});

module.exports = mongoose.model("urls",urlSchema);