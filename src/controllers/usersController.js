const user = require("../../database/models/user")
const bcrypt = require('bcrypt');

const users = {
  getAll: async (req, res) => {
    const data = await user.findAll();
    if (!data) return res.status(400).send("Oops... something went wrong");
    return res.status(200).send(data);
  },
  createUser: async (req, res) => {
    try {
      
      const flag = await user.findOne({
        where: {
        email: "formosaop@admin.com"
      }
    })
    if (!flag) {
      const pass = process.env.USER_ADMIN_PASSWORD
      const passHash = bcrypt.hashSync(pass, 10);   
      const data = await user.create({
        firstName: "Admin",
        lastName: "Admin",
        email: "formosaop@admin.com",
        password: passHash,
        isAdmin: true,
      })
      
      if (data) {
        return res.status(200).send(data)
      }
    }
    return res.status(400).send("The admin already exist!")
  } catch (e) {
    res.status(400).send(e.message)
  }
  },
  deleteUser: async (req, res) => {
    await user.destroy({
      where: {
        email: "user@admin.com"
      }
    })
    const flag = await user.findOne({
      where: {
        email: "user@admin.com"
      }
    })
    if (flag) {
      return res.status(400).send("Sorry, te admin couldn't be deleted, pls try again")
    }
    return res.status(200).send("The admin was succesflly deleted")
  }
}

module.exports = users;