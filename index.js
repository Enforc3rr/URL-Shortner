const Express = require("express");
const dbConfig = require("./configurations/dbConfig");
const urlRouter = require("./router/urlrouter");
const logger = require("./logger.js");
const dotenv = require("dotenv");
dotenv.config({path:"./configurations/config.env"});

//Initializing Express
const app = new Express();

//Connecting To Database
dbConfig();

//Middleware
//Custom Logger
app.use(logger);
//Express In-Built Parser
app.use(Express.json());
//Express Router
app.use(urlRouter);

//Looking for Port
const PORT = process.env.PORT || 8080;

//Starting Server
app.listen(PORT , ()=>console.log(`Server Started at Port ${PORT}`));

