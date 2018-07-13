const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tickets: {
        type: [Object],
        required: false,
        default: null
    },
    transactions:{
        type: [Object],
        required: false
    },
    password:{
        type: String,
        required: true
    }
})
module.exports = User = mongoose.model('user',UserSchema);