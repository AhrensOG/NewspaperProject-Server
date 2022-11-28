const { Router } = require('express');
const login = require('../controllers/auth.js')

const router = Router();

router.post('/', login.auth);
router.get('/', login.getAll)

module.exports = router;