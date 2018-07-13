const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const TicketSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    expiryDate: {
        type: Date,
        required: false,
        default: Date.now()
    },
    Event: {
        type: String,
        required: true
    }
})
module.exports = Ticket = mongoose.model('ticket',TicketSchema);