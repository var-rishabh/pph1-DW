const mongoose = require('mongoose');

const SubscriptionSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    vip_member: {
        type: Boolean,
        default: false
    },
    subscribed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
module.exports = Subscription;