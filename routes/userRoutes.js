const express = require('express');
const router = express.Router();

// Import UserController
const UserController = require('../controllers/UserController');

// Define the API routes for users
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.get('/:id', UserController.getUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;