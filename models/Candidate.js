const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    imageUrl: String,
    campaign: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign',
    },
    votes: {
        type: Number,
        default: 0,
    },
});

const Candidate = mongoose.model('Candidate', candidateSchema);

module.exports = Candidate;