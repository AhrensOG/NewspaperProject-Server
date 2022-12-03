require("dotenv").config();
const bcrypt = require("bcrypt");
const User = require("../../database/models/user");

const login = {
  auth: async (req, res) => {
    try {
      const { email, password } = req.body;

      if ((!email, !password))
        return res.status(400).send("the email or password is missing");

      const user = await User.findOne({ where: { email } });
      if (user === null) {
        return res.status(400).json({
          errors: [
            {
              msg: "El usuario ingresado no existe",
            },
          ],
        });
      } else if (bcrypt.compareSync(password, user.password)) {
        const id = user.id;
        return res.status(200).send(id);
      } else {
        return res.status(500).json({
          errors: [
            {
              msg: "El usuario y contraseña no coincide",
            },
          ],
        });
      }
    } catch (e) {
      return res.status(400).send(e);
    }
  },
};

module.exports = login;

// if (!data) return res.status(404).send("password or email not matches");

