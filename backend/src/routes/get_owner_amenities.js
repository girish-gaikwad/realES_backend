const express = require('express');
const router = express.Router();
const db = require('../../models/index');
const { get_owner_amenities_Byid } = require('../controllers/get_owner_amenities_Byid');

// GET all owner_amenities_by_id
router.get('/:id', get_owner_amenities_Byid);

module.exports = router;
