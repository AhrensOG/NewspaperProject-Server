const Category = require('../../database/models/category');
const Post = require('../../database/models/post');
const Tags = require('../../database/models/tags');
const User = require('../../database/models/user');
const  sanitizeHtml  =  require ('sanitize-html');


const postController = {
  create: async (req, res) => {
    try {
      const { title, subTitle, image, description, type, category, tag, isAd } = req.body;

      if( !title || !subTitle || !image || !description || !type || !category || !tag ) return res.status(400).send('Missing Data');

      const post = await Post.findOne( { where: { title } } )
      if(post) return res.status(400).send('Ya existe una noticia con ese titulo.')

      await Post.create({
        title,
        subTitle,
        image,
        description,
        viewed: 0,
        firstPlain: type === 'firstPlain' ? true : false, 
        secondPlain: type === 'secondPlain' ? true : false,
        thirdPlain: type === 'thirdPlain' ? true : false,
        isAd
      });

      const newPost = await Post.findOne( { where: { title } });
      const foundTag = await Tags.findOne({ where: { name: tag } });
      const categories = [];
      for (let i = 0; i < category.length; i++) {
        const element = await Category.findOne({ where: { name: category[i] } });
        categories.push(element)
      }
      await foundTag.addPost(newPost);
      await newPost.setCategories(categories)

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
  update: async(req, res) => {
    try {
      const {id, title, subTitle, image, content, tag, categories, type, isAd } = req.body;
      if (!id) {
        return res.status(400).send("An id is requeried")
      } else {
        if (title) {
          await Post.update({ title }, { where: { id } } )
        } 
        if (subTitle) {
          await Post.update( { subTitle }, { where: { id } } )
        }
        if (image) {
          await Post.update({ image }, { where: { id } } )
        }
        if (content) {
          await Post.update({ description: content }, { where: { id } } )
        }
        if (tag) {
          const news = await Post.findOne({where: { id }})
          const foundTag = await Tags.findOne({ where: { name: tag } });
          await foundTag.addPost(news);
        }
        if (categories) {
          const news = await Post.findOne({where: { id }})
          const categoriesArray = []
          for (let i = 0; i < categories.length; i++) {
            const element = await Category.findOne({ where: { name: categories[i] } });
            categoriesArray.push(element)
          }
          await news.setCategories(categoriesArray)
        }
      }

      if(type === 'firstPlain'){
        await Post.update({ firstPlain: true, SecondPlain: false, thirdPlain: false }, { where: { id } })
      }
      if(type === 'secondPlain'){
        await Post.update({ SecondPlain: true, firstPlain: false, thirdPlain: false  }, { where: { id } })
      }
      if(type === 'thirdPlain'){
        await Post.update({ thirdPlain: true, SecondPlain: false, firstPlain: false  }, { where: { id } })
      }
      if(type === 'none'){
        await Post.update({ firstPlain: false, secondPlain: false, thirdPlain: false }, { where: { id } })
      }

      if(isAd !== undefined) {
        await Post.update({ isAd }, { where: { id } })
      }

      const news = await Post.findByPk(id, {include:[ {model: Tags}, {model: Category, through: { attributes: [] }} ] })
      return res.status(200).send(news);
    } catch (e) {
      res.status(400).send(e)
    }
  },
  delete: async (req, res) => {
    try {
      const {id} = req.query
      if(!id) {
        return res.status(400).send("An id is required")
      } else {
        await Post.destroy({
          where: {
            id
          },
        })
        res.status(200).send("Post deleted succesfully")
      }
    } catch (e) {
      return res.status(400).send(e.message)
    }
  },
  getAll: async (req, res) => {
    try {
      const { tag , limit, parsed} = req.query;
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
      if(parsed) {
        const clean = data
        for (let i = 0; i < clean.length; i++) {
          clean[i].description = sanitizeHtml(data[i].description, {
            allowedTags: [],
            allowedAttributes: {}
          })
        }
        console.log(clean[0])
        return clean?.length 
        ? res.status(200).send(clean)
        : res.status(400).send('No data clean');
      }

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