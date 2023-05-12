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
    res.render("index", {title:"recipes"})
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