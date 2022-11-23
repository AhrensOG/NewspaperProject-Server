const Tags = require("../../database/models/tags")

const tagController = {
  getAll: async (req, res) => {
    try {
      const data = await Tags.findAll();
      data?.length
      ? res.status(200).send(data)
      : res.status(400).send('No data for tags table')
      
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }
}

module.exports = tagController;