//main file for backend
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

//MongoDB connection first and then connect to server
mongoose
  .connect("test")
  .then(() => {
    //Logging to the console whatever is being listened to
    app.listen(port, () => {
      console.log("Connected to MongoDB");
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
