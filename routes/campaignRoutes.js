const express = require('express');
const router = express.Router();

// Import CampaignController
const CampaignController = require('../controllers/CampaignController');

// Define the API routes for campaigns
router.get('/', CampaignController.getAllCampaigns);
router.post('/', CampaignController.createCampaign);
router.get('/:id', CampaignController.getCampaign);
router.put('/:id', CampaignController.updateCampaign);
router.delete('/:id', CampaignController.deleteCampaign);

module.exports = router;
