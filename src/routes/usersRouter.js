const { Router } = require('express');
const users = require('../controllers/usersController.js');

const router = Router();

router.get('/', users.getAll)
router.post('/', users.createUser)
router.delete('/', users.deleteUser)

module.exports = router;