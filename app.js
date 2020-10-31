const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

// Import Routes
const postsRoute = require('./routes/posts');

//Middlewares
app.use(bodyParser.json());
app.use('/posts', postsRoute);

// !app.use('/posts', () => {
// !    console.log("This is middleware running");
// !});

// ? app.use(auth);

// ROUTES
app.get('/', (req, res) => {
    res.send("We are on home");
});

// Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log("connected to DB")
);

// How to we start listening to the server
app.listen(3000);