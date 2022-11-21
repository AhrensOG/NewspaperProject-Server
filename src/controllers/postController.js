const Category = require('../../database/models/category');
const Post = require('../../database/models/post');
const Tags = require('../../database/models/tags');
const User = require('../../database/models/user');


const postController = {
  create: async (req, res) => {
    try {
      const { title, subTitle, image, description } = req.body;

      if( !title || !subTitle || !image || !description ) return res.status(400).send('Missing Data');

      await Post.create({
        title,
        subTitle,
        image,
        description,
        viewed: 0
      });

      const newPost = await Post.findOne( { where: { title } });

      newPost
        ? res.status(200).send(newPost)
        : res.status(400).send('Error creating the post');

    } catch (error) {
      res.status(400).send(error.message);
    };
  },
  getAll: async (req, res) => {
    try {
      const { tag , limit} = req.query;
      if(tag && limit) {
        const data = await Post.findAll({
          include: [
            {
              model: Tags,
              where: {
                name: tag
              }
            },
            {
              model: Category,
              through: {
                attributes: []
              }
            },
          ],
          order: [
            ['createdAt', 'DESC']
          ],
          limit: limit
        });
        return data?.length 
          ? res.status(200).send(data)
          : res.status(400).send(`No data with Tag ${tag}`);  
      }
      if(tag) {
        const data = await Post.findAll({
          include: [
            {
              model: Tags,
              where: {
                name: tag
              }
            },
            {
              model: Category,
              through: {
                attributes: []
              }
            },
          ],
          order: [
            ['createdAt', 'DESC']
          ]
        });
        return data?.length 
          ? res.status(200).send(data)
          : res.status(400).send(`No data with Tag ${tag}`);  
      }
      const data = await Post.findAll({
        order: [
          ['createdAt', 'DESC']
        ]
      });
      return data?.length 
        ? res.status(200).send(data)
        : res.status(400).send('No data');
    } catch (error) {
      res.status(400).send(error.message);
    };
  },
  getDetail: async (req, res) => {
    try {
      const {title} = req.query
      if(title ==="undefined") {
        []
      }
      if(!title) {
        res.status(400).send("A title or tag is missing")
      } else {
        const data = await Post.findOne({
          include: [
            {
              model: Category,
              through: {
                attributes: [],
              }
            },
            {
              model: Tags,
            }
          ],
          where:{
            title: title,
          }
        })
        if(!data) {
          res.status(404).send("New not found")
        } else {
          res.status(200).send(data)
        }
      }     
    } catch (error) {
      res.status(500).send(error.message)
    }
  }
};

module.exports = postController;