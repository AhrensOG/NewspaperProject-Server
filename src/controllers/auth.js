const jose = require('jose');
require('dotenv').config()
const User = require('../../database/models/user');


const login = {
  getAll: async (req, res) => {
    const data = await User.findAll()
    if(!data) return res.status(400).send("Oops... something went wrong")
    return res.status(200).send(data)
  },
  auth: async (req, res) => {
    const {email, password} = req.body

    if(!email, !password) return res.status(400).send("the email or password is missing")
    const data = await User.findOne({where:{
      email:email,
      password: password
    }})

    if (!data) return res.status(400).send("password or email not matches")

  const id = data.id
  const admin = data.admin
  encoder = new TextEncoder()
  const alg = 'HS256'
  const jwt = await new jose.SignJWT({ id})
  .setProtectedHeader({ alg, type:"JWT" })
  .setIssuedAt()
  .setExpirationTime('2h')
  .sign(encoder.encode(process.env.JWT_PRIVATE_KEY))
  return res.status(200).send({jwt})
  }
}

module.exports = login;