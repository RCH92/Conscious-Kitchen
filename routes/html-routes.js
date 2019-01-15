// This file will provide routes to serve various html pages...
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('welcome.ejs'));

router.get('/user/dashboard', (req, res) => res.send('Dashboard'));
// router.get('/dashboard', (req, res) => res.send('Dashboard'));


router.get('/user/success', (req, res) => res.render('success.ejs', {msg: 'Registration successful! Please sign in.', type: "success"}));
router.get('/user/login', (req, res) => res.render('success.ejs', {msg: 'Username or password incorrect', type: "fail"}));
module.exports = router;