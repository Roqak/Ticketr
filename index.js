const express = require('express');
const app = express();
const mongoose = require("mongoose");
const mongoUri = require("./config").mongoUri;
const user = require("./Routes/user");
const event = require("./Routes/event");
const ticket = require("./Routes/ticket");
const bodyParser = require('body-parser');
const passport = require('passport');
const Strategy = passport.Strategy();
// app.set('view engine','ejs');
// app.use(express.static('public'));
mongoose.connect(mongoUri)
.then(()=>console.log("connection to the database was successful"))
.catch(err=>console.log("error connecting to db "+err))

app.use(passport.initialize());
require('./Routes/auth')(passport);


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("Home route");
})

app.use("/api/user",user);
app.use("/api/ticket",ticket);
app.use("/api/event",event);


app.listen(6000,()=>{console.log("Listening on port "+6000)});