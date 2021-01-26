const mongoose = require("mongoose");

const db = async ()=>{
    const conn = await mongoose.connect(process.env.DB,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    });
    console.log(`connected to database ${conn.connection.host}`);
}

module.exports = db;