const express = require('express');
const router = express.Router();
const myEvent = require("../Models/Eventt");
const bodyparser = require("body-parser");
const app = express();


router.get("/test",(req,res)=>{
    res.json("Hello World from event");
})
//ADD NEW EVENT
router.post("/add",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const newEvent = new myEvent({
        name: req.body.name,
        type: req.body.type,
        active: true,
        expiryDate: req.body.expirydate
        });
        newEvent.save()
        .then(()=>{
            console.log("successfuly added new event");
        })
        .catch((err)=>{
            console.warn("Error adding new event " + err);
        })
})
//LIST ALL EVENTS
router.get("/allevents",(req,res)=>{
    myEvent.find()
    .then((result)=>{
        res.json(result);
    })
    .catch((err)=>{console.error("error fetching all events "+ err)});
})








module.exports = router;