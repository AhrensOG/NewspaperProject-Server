const { Router } = require('express');
const login = require('../controllers/authController.js')

const router = Router();

router.post('/', login.auth);

module.exports = router;