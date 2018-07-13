const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const EventSchema = new Schema({
    name: {
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
        required: true
    },
    Tickets:{
        type: [String],
        required: false
    },
    eventId:{
        type: String,
        required: false
    }
});
module.exports = Eventt = mongoose.model('eventt',EventSchema);