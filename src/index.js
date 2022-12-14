const app = require("./app");
const connection = require("../database/index");
const User = require("../database/models/user");
const Post = require("../database/models/post");
const Category = require("../database/models/category");
const mockData = require("../database/models/bulkCreateDB");
const Tags = require("../database/models/tags");

//----------------Build relationships-----------------

//Create intermediate table 'Likes'
Post.belongsToMany(User, { through: "Likes" });
User.belongsToMany(Post, { through: "Likes" });

//Create intermediate table 'Category_Post'
Post.belongsToMany(Category, { through: "Category_Post" });
Category.belongsToMany(Post, { through: "Category_Post" });

//Relationship of Post and Tags
Tags.hasMany(Post, { foreignKey: "tagId" });
Post.belongsTo(Tags);

//----------------------------------------------------

//Run server and db
connection.sync({ force: false }).then(() => {
  app.listen(process.env.PORT || 3001, () => {
    mockData();
    console.log(`Listening at ${process.env.PORT || 3001}`);
  });
});
