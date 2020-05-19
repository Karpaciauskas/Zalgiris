const express = require('express');
const {getQuestions} = require("./controllers/Controller");
const {getAttacks} = require("./controllers/Controller");
const {getAbout} = require("./controllers/Controller");
const {getGrunwald} = require("./controllers/Controller");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');

require("dotenv").config();

const app = express();
const port = process.env.PORT || port;

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
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
