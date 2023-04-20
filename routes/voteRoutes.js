const express = require('express');
const router = express.Router();

// Import VoteController
const VoteController = require('../controllers/VoteController');

// Define the API routes for votes
router.get('/', VoteController.getAllVotes);
router.post('/', VoteController.createVote);
router.get('/:id', VoteController.getVote);
router.put('/:id', VoteController.updateVote);
router.delete('/:id', VoteController.deleteVote);

module.exports = router;
