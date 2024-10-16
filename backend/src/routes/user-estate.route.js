const express = require('express')
const router = express.Router()
const db = require('../../models/index');
const { getuser_estates_Byid,delete_user_estates_Byid } = require('../controllers/user_estate.controller');

// GET all user estates_by_id


router.get('/:id',getuser_estates_Byid);
router.put('/soft-delete/:id/:estate_id',delete_user_estates_Byid);

module.exports = router