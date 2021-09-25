const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 3000;

// MongoDB URI
const URI = process.env.URI;

app.use(express.json());

// Connecting to database
mongoose.connect(URI);
