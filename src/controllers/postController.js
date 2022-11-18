const Post = require('../../database/models/post');

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
};

module.exports = postController;