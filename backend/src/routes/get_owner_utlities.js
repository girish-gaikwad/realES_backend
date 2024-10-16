const express = require('express');
const router = express.Router();
const db = require('../../models/index');
const { get_owner_utilities_Byid } = require('../controllers/get_owner_utlities_Byid');

// GET all owner_utilities_by_id
router.get('/:id', get_owner_utilities_Byid);

module.exports = router;