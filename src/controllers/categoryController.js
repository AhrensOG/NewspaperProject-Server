const Category = require('../../database/models/category');

const categoryController = {
  getAll: async (req, res) => {
    try {
      const data = await Category.findAll();
      return data?.length !== 0
      ? res.status(200).send(data)
      : res.status(400).send('No data in categories')
    } catch (error) {
      res.status(400).send({'CategoryController': error.message})
    }
  }
}

module.exports = categoryController;