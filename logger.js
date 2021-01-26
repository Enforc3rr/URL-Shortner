const moment = require("moment");
const logger = (req,res,next)=>{
    console.log(console.log(`API was hit with ${req.method} method at ${req.protocol}://${req.hostname}:${8080}${req.url} on ${moment().format()}`));
    next();
}
module.exports = logger;