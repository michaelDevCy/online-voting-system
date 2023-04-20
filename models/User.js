const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    hkid: {
        type: String,
        required: true,
        unique: true,
    },
    votedCampaigns: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Campaign',
        },
    ],

});

const User = mongoose.model('User', userSchema);

module.exports = User;