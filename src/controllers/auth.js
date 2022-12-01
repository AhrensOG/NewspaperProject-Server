require("dotenv").config();
const User = require("../../database/models/user");

const login = {
  getAll: async (req, res) => {
    const data = await User.findAll();
    if (!data) return res.status(400).send("Oops... something went wrong");
    return res.status(200).send(data);
  },
  auth: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(email, password);
      if ((!email, !password))
        return res.status(400).send("the email or password is missing");

      const data = await User.findOne({
        where: {
          email: email,
          password: password,
        },
      });

      if (!data) return res.status(404).send("password or email not matches");

      const id = data.id;
      return res.status(200).send(id);
    } catch (e) {
      console.log(e.message);
    }
  },
};

module.exports = login;
