const Vote = require('../models/Vote');

const getAllVotes = async (req, res) => {
    try {
        const votes = await Vote.find();
        res.status(200).json(votes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createVote = async (req, res) => {
    try {
        const newVote = new Vote(req.body);
        await newVote.save();
        res.status(201).json(newVote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getVote = async (req, res) => {
    try {
        const vote = await Vote.findById(req.params.id);
        if (!vote) {
            return res.status(404).json({ message: 'Vote not found' });
        }
        res.status(200).json(vote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateVote = async (req, res) => {
    try {
        const updatedVote = await Vote.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedVote) {
            return res.status(404).json({ message: 'Vote not found' });
        }
        res.status(200).json(updatedVote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteVote = async (req, res) => {
    try {
        const deleteVote = await Vote.findByIdAndDelete(req.params.id);
        if (!deleteVote) {
            return res.status(404).json({ message: 'Vote not found' });
        }
        res.status(200).json({ message: 'Vote deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllVotes,
    createVote,
    getVote,
    updateVote,
    deleteVote,
};
