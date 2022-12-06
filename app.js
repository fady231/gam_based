const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Importing route
const questionsRoute = require('./routes/questions');
const user = require('./routes/users');


//Middlewares
app.use(bodyParser.json());
app.use('/questions', questionsRoute);
app.use('/user', user);



//ROUTES
app.get('/', (req,res) => {
    res.send('We are Home');
});


//Connecting to DB
mongoose.connect(
    "mongodb+srv://ahmed:7IxlE70oZXGK8WVz@cluster0.urdmbgm.mongodb.net/questions?retryWrites=true&w=majority", {
        useNewUrlparser: true,
        useUnifiedTopology: true,
    },
    () => console.log('connected to DB!'),
);


//How do we start listening to the server
 app.listen(3000)
