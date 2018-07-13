const express = require('express');
const router = express.Router();
const Ticket = require("../Models/Ticket");
const Eventt = require("../Models/Eventt");
// const bodyparser = require("body-parser");
// const app = express();
const passport = require("passport");
router.get("/test",(req,res)=>{
    res.json({data:'hhhjhhkk',it:'oppojkj'});
})

router.post("/:eventName/add",passport.authenticate('jwt', { session: false }),(req,res)=>{
    console.log("The current User is : "+req.name);
    Ticket.findOne({name: req.body.name})
    .then(ticket=>{
        if(!ticket){
            const newTicket = new Ticket({
                name: req.body.name,
                price: req.body.price,
                type: req.body.type,
                Event: req.params.eventName
            })
            newTicket.save()
            .then((ticket)=>{
                console.log("Ticket Added Succesfully")
                //FIND THE EVENT NAME IN THE EVENTT MODEL AND PUSH THE TICKET ID TO THE TICKETS ARRAY
                Eventt.findOne({name: req.params.eventName})
                    .then(event=>{
                        if (event){

                        }else {

                        }
                    })
            })
            .catch((err)=>console.log("Error adding ticket "+ err))
        }else{
            console.log("Ticket already exist");
        }
    })
});
router.get("/all",passport.authenticate('jwt', { session: false }),(req,res)=>{
    Ticket.find()
    .then(result=>console.log(result))
    .catch(err=>{console.log(err)})
});
//
router.get("/manage/:id",passport.authenticate('jwt', { session: false }),(req,res)=>{
    console.log(req.params.id);
    Ticket.findOne({creator: req.params.id})
    .then((result)=>{
        if(result){
            res.status(200).json({mytickets:result});
        }
    })
    .catch(err=>console.log("Error fetching ticket "+ err))
});
router.post("/book",passport.authenticate('jwt', { session: false }),(req,res)=>{
    const ticketPrice = req.body.price;
    
});

module.exports = router;