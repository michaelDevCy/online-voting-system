const express = require('express');
const router = express.Router();

// Import CandidateController
const CandidateController = require('../controllers/CandidateController');

// Define the API routes for candidates
router.get('/', CandidateController.getAllCandidates);
router.post('/', CandidateController.createCandidate);
router.get('/:id', CandidateController.getCandidate);
router.put('/:id', CandidateController.updateCandidate);
router.delete('/:id', CandidateController.deleteCandidate);

module.exports = router;
