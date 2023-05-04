const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
    },
    phone: {
        type: Number,
        unique: true
    },
    alternate_phone: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    address: {
        type: Array
    },
    vip: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;