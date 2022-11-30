const { Router } = require('express');
const categoryController = require('../controllers/categoryController');

const router = Router();

router.get('/', categoryController.getAll);
router.post("/", categoryController.post)
router.delete("/", categoryController.delete)

module.exports = router;