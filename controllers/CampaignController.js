const Campaign = require('../models/Campaign');

const getAllCampaigns = async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.status(200).json(campaigns);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCampaign = async (req, res) => {
    try {
        const newCampaign = new Campaign(req.body);
        await newCampaign.save();
        res.status(201).json(newCampaign);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCampaign = async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json(campaign);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCampaign = async (req, res) => {
    try {
        const updatedCampaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCampaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json(updatedCampaign);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteCampaign = async (req, res) => {
    try {
        const deleteCampaign = await Campaign.findByIdAndDelete(req.params.id);
        if (!deleteCampaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json({ message: 'Campaign deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCampaigns,
    createCampaign,
    getCampaign,
    updateCampaign,
    deleteCampaign,
};
