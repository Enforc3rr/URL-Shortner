const modelUrl = require("../model/urlSchema");
/*
@desc  For Storing The URL and It's Alias in Database
@route POST /
*/
exports.urlCreation = async (req , res , next) =>{
    try{
        if(req.body.originalUrl.substr(0,3)==="www"){
            req.body.originalUrl= req.body.originalUrl.replace("www","http://www");
            console.log(req.body.originalUrl);
        }
        req.body.newUrl = `http://localhost:8080/${req.body.altUrlName}`
        const creatingUrl = await modelUrl.create(req.body);
        res.status(201).json({
            success:true,
            value:req.body
        });
        console.log(`Url Received ${req.body.originalUrl}`);
    }catch (e) {
        res.status(400).json({
            success:false,
            value:"Similar Name Of Some Other URL Already Exists Try Other Name"
        })
    }
    next();
}
/*
@desc  For Finding and Redirecting URL associated with the given Parameter
@route GET /:parameter
*/
exports.urlRedirect = async (req , res , next)=>{
    try {
        const findUrl = await modelUrl.findOne({
            altUrlName:req.params.urlName
        });
        res.redirect(findUrl.originalUrl);
    }catch (e) {
        console.log(`Cannot Find URL based On Given Parameter ${req.params.urlName}`);
        res.send(`<h1>Cannot Find URL based On Given Parameter ${req.params.urlName}</h1>`)
    }
    next();
}