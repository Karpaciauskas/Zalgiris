const express = require('express');
const {getQuestions} = require("../backend/controllers/Controller");
const {getAttacks} = require("../backend/controllers/Controller");
const {getAbout} = require("../backend/controllers/Controller");
const {getGrunwald} = require("../backend/controllers/Controller");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/Questions",getQuestions)
app.use("/Attacks",getAttacks)
app.use("/About",getAbout)
app.use("/Grunwald",getGrunwald)

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", ()=> {
  console.log("MongoDB database connection established successfully!")
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, './')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
