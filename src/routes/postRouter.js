const { Router } = require('express');
const postController = require('../controllers/postController');

const router = Router();

router.post('/', postController.create);
router.get('/', postController.getAll);
router.get('/category', postController.getByCategory);
router.get('/detail', postController.getDetail)

module.exports = router;