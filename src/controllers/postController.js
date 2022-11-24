const Category = require('../../database/models/category');
const Post = require('../../database/models/post');
const Tags = require('../../database/models/tags');
const User = require('../../database/models/user');


const postController = {
  create: async (req, res) => {
    try {
      const { title, subTitle, image, description, firstPlain, secondPlain, thirdPlain, isAd, category, tag } = req.body;

      if( !title || !subTitle || !image || !description || firstPlain === undefined || secondPlain === undefined || thirdPlain === undefined || isAd === undefined || !category || !tag ) return res.status(400).send('Missing Data');

      await Post.create({
        title,
        subTitle,
        image,
        description,
        viewed: 0,
        firstPlain,
        secondPlain,
        thirdPlain,
        isAd,
      });

      const newPost = await Post.findOne( { where: { title } });
      const foundTag = await Tags.findByPk(tag);
      const categories = [];
      for (let i = 0; i < category.length; i++) {
        const element = await Category.findByPk(category[i]);
        categories.push(element)
      }
      await foundTag.addPost(newPost);
      await newPost.addCategories(categories)

      const createdPost = await Post.findOne({
        include: [
          {
            model: Tags,
          },
          {
            model: Category,
            through: {
              attributes: []
            }
          },
        ],
        where: { title } 
      })

      createdPost
        ? res.status(200).send(createdPost)
        : res.status(400).send('Error creating the post');

    } catch (error) {
      res.status(400).send(error.message);
    };
  },
  getAll: async (req, res) => {
    try {
      const { tag , limit} = req.query;
      if(tag === 'undefined') return res.status(200).send([])
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
        include: [
          {
            model: Tags,
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
        : res.status(400).send('No data');
    } catch (error) {
      res.status(400).send(error.message);
    };
  },
  getByCategory: async (req, res) => {
    try {
      const { name } = req.query;

      if(name === 'undefined') {
        return res.status(200).send([])
      };

      const data = await Post.findAll({
        include: [
          {
            model: Tags,
          },
          {
            model: Category,
            through: {
              attributes: []
            },
            where:{
              name: name
            }
          },
        ],
        order: [
          ['createdAt', 'DESC']
        ],
      })
      return data?.length 
        ? res.status(200).send(data)
        : res.status(400).send(`No data with Categry ${name}`); 
    } catch (error) {
      res.status(400).send({'Error in post controller': error.message})
    }
  },
  getDetail: async (req, res) => {
    try {
      const {id} = req.query

      if(id === "undefined") {
        return res.status(200).send([])
      }

      if(!id) {
        res.status(400).send("A id is missing")
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
            id: id,
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