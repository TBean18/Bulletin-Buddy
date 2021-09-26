const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");

// API Routers
const userRouter = require("./routes/api/users");
const hubRouter = require("./routes/api/hubs");
const postsRouter = require("./routes/api/posts");

require("dotenv").config();

const port = process.env.PORT || 3001;

// MongoDB URI
const URL = process.env.MONGO_URL;

// Body Parser
app.use(express.json());

// cor
app.use(cors());

// Connecting to database
mongoose
  .connect(URL, {
    autoIndex: true,
  })
  .then(() => {
    console.log("MongoDB Connected!! Yay 😍🤳🏌️‍♂️");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);
app.use("/api/hubs", hubRouter);
app.use("/api/posts", postsRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("../my-app/build"));
  app.get("*", (req, res) => {
    // ! Maybe this is wrong 🤷‍♂️
    res.sendFile(path.resolve(__dirname, "my-app", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server Started on Port ${port}`));
