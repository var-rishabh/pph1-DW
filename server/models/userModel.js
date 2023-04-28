const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    alternate_phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    session_id: {
        type: String,
        default: ""
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;