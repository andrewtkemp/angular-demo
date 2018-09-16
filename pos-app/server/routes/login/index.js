const express = require('express');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const db = require('../../db');
const router = express.Router();



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('login api works');
});

module.exports = router;