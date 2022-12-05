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
  },
  post: async (req, res) => {
    const {name} = req.query
    if(!name) return res.status(400).send("A name for te category is requeried")
    const flag = await Category.findOne({
      where: {
        name
      }
    })
    if (flag?.name) return res.status(400).send("The category already exist!")
    const data = await Category.create({
      name
    })
    const category = await Category.findOne({
      where: {
        name
      }
    })
    if (category?.name) return res.status(200).send({msg: "The category were succesfully created!", data: category})
    return res.status(400).send("Oops... something went wrong. Try again!")
  },
  delete: async(req, res) => {
    const {id} = req.query
    if(!id) return res.status(400).send("The id is required for delete")
    const flag = await Category.findOne({
      where: {
        id
      }
    })
    if (!flag) return res.status(400).send("The category doesn't exist!")
    const categoryDeleted = await Category.destroy({
      where: {
        id
      }
    })
    const flag2 = await Category.findOne({
      where: {
        id
      }
    })
    if (flag2) return res.status(400).send("Oops... something went wrong, the category couldn't be deleted. Pleas try again!")
    return res.status(200).send("The category were succesfully deleted!")
  }
}

module.exports = categoryController;