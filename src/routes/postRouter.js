const { Router } = require('express');
const postController = require('../controllers/postController');

const router = Router();

router.post('/', postController.create);
router.put("/", postController.update)
router.delete('/', postController.delete)
router.get('/', postController.getAll);
router.get('/category', postController.getByCategory);
router.get('/detail', postController.getDetail)
router.get('/plain', postController.getByPlain)
router.get('/search', postController.getBySearch)

module.exports = router;