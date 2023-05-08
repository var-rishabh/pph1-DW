const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;