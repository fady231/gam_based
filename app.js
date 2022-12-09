const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const student = require("./routes/students");
const user = require("./routes/users");
const FSE = require("./routes/FirstStadgeEn");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/FSEimage")));
app.use("/student", student);
app.use("/user", user);
app.use("/FSE", FSE);



mongoose.connect(
  "mongodb+srv://ahmed:7IxlE70oZXGK8WVz@cluster0.urdmbgm.mongodb.net/questions?retryWrites=true&w=majority",
  {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to DB!")
);


app.listen(3000);
