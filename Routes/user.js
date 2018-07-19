const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();
const User = require("../Models/User");
const jwt= require('jsonwebtoken');
passport = require('passport');
const auth = require('./auth')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
router.get("/test",(req,res)=>{
    res.json({msg:"Hello World from user"});
})
router.post("/add",(req,res)=>{
    User.findOne({name: req.body.name})
    .then(user=>{
        if(!user){
            const newUser = new User({name: req.body.name,
            password: req.body.password})
            newUser.save()
            .then((user)=>{console.log("user registered")
            res.status(200).json({message:"User Registered"})
        })
            .catch(err=>{console.log("error registering user "+ err)})
        }else{
            console.log("User exists");
            res.status(404).json({message:"User found"})
        }
    })
    .catch((err)=>{console.log("error finding user "+ err)})
})
//GET ALL USERS
router.get("/all",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const currentUser = req.user;
    console.log("The current User is : "+currentUser +". Thanks");
    User.find()
    .then((result)=>{
        // console.log(result);
        res.status(200).json({data:result})
    })
    .catch(err=>{
        console.log(err)    })
})
//
router.get("/manage/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    User.findOne({name: req.params.id})
    .then((result)=>{
        if(result){
            res.status(200).json({mytickets:result});
        }
    })
    .catch(err=>console.log("Error fetching ticket "+ err))
})
router.post("/login",(req,res)=>{
    User.findOne({name: req.body.name})
    .then(user=>{
        if(user){
            if(user.password === req.body.password){
                // res.status(200).json({msg: "Login Successful"})
                const authUser = {
                    id: user.id,
                    name: user.name,
                    password: user.password
                }
                jwt.sign(authUser,'secret',(err,token)=>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(token)
                        res.status(200).json({token})
                    }
                });
            }else{
                res.status(403).json({errorMsg:"Login not Successful"})
            }
        }
    })
})

//SAMPLE
router.get("/samp",(req,res)=>{
    console.log("The current User is : "+". Thanks");
        res.status(200).json({data:"mind yourself"})
})


module.exports = router;
