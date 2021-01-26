const Express = require("express");
const dbConfig = require("./configurations/dbConfig");
const urlRouter = require("./router/urlrouter");
const logger = require("./logger.js");
const dotenv = require("dotenv");
dotenv.config({path:"./configurations/config.env"});


const app = new Express();

dbConfig();

app.use(logger);
app.use(Express.json());
app.use(urlRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT , ()=>console.log(`Server Started at Port ${PORT}`));

