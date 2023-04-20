const express = require('express');
const Candidate = require('../models/Candidate');

const router = express.Router();

// POST - create a new candidate
router.post('/', async (req, res) => {
    try {
        const newCandidate = new Candidate(req.body);
        await newCandidate.save();
        res.status(201).json(newCandidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET - Retrieve all candidates
router.get('/', async (req, res) => {
    try {
        const candidates = await Candidate.find();
        res.status(200).json(candidates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET - Retrieve a candidate by ID
router.get('/:id', async (req, res) => {
    try {
        const candidate = await Candidate.findById(req.params.id);
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }
        res.status(200).json(candidate);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// PUT - Update a candidate by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedCandidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCandidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }
        res.status(200).json(updatedCandidate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE - Delete a candidate by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleteCandidate = await Candidate.findByIdAndDelete(req.params.id);
        if (!deleteCandidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }
        res.status(200).json({ message: 'Candidate deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});





// Export the router
module.exports = router;
