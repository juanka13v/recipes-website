require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const { MONGO_URI, PORT } = require("./config");

// Utils



// routes


const app = express();

// connect to MongoDB
const connectDB = require("./db/connect");
const { log } = require("console");

// Templating Engine
app.set("views", __dirname + "/views");
// app.set("layout", "./layouts/index_layout");
app.set("view engine", "ejs");

// middlewares
// app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());    
app.use(express.static(path.join(__dirname, "/public")));

// routes
app.get("/", (req, res) => {
    const trending = require("./db/recipes.db.json").slice(0, 4)
    const recipes = require("./db/recipes.db.json")
    const categories = require("./db/categories.db.json").slice(0,9)

    res.render("index", {title:"recipes", trending, recipes, categories})
});


const port = PORT;

// const start = async () => {
//   try {
//     // connectDB
//     await connectDB(MONGO_URI);
//     console.log("connected");
//     app.listen(port, console.log(`Server is listening port ${port}`));
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
app.listen(port, console.log(`Server is listening port ${port}`));