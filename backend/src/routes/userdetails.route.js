const express = require('express');
const router = express.Router();
const db = require('../../models/index');
const { getuserdetails_Byid } = require('../controllers/getuserdetails.controllers');

// GET user details by id

router.get('/:id',getuserdetails_Byid);

module.exports = router