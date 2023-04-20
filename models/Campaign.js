const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    candidates: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Candidate',
        },
    ],

});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;
