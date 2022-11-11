const app = require('./app');
const connection = require('../database/index');

connection.sync({force: false}).then( () => {
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening at ${process.env.PORT || 3001}`)
  })
})