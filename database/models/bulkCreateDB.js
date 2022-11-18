const Post = require("../models/post");
const User = require("../models/user");
const Category = require("../models/category");
const Tags = require("../models/tags");

const mockData = async () => {
  try {
    const post = [
      {
        title: "Lorem ipsum dolor sit amet-1",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-2",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-3",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-4",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-5",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-6",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-7",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-8",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-9",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet-10",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
    ];
    const user = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "user@user.com",
        isAdmin: false,
      },
      {
        firstName: "Pepe",
        lastName: "Doe",
        email: "admin@admin.com",
        isAdmin: true,
      },
    ];
    const category = [
      {
        name: "Police",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Life",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Sport",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
    ];
    const tags = [
      {
        name: "Today's Picks",
      },{
        name: "Most Recent",
      },{
        name: "Trending",
      },{
        name: "Important",
      },{
        name: "None",
      }
    ]

    const dbPost = await Post.findAll();
    const dbUser = await User.findAll();
    const dbCategory = await Category.findAll();
    const dbTags = await Tags.findAll();

    if (!dbTags?.length) {
      await Tags.bulkCreate(tags);
      const dbTagsAfter = await Tags.findAll();
      dbTagsAfter?.length
        ? console.log("TagsTable Actualized")
        : console.log('Error in TagsTable');
    }
    if (!dbPost?.length) {
      const Tag = await Tags.findByPk(1)
      post.forEach(async (p) => {
        await Post.findOrCreate({ where: { title: p.title, subTitle: p.subTitle, image: p.image, description: p.description, viewed: p.viewed } })
        const newPost = await Post.findOne({ where: { title: p.title } })
        await Tag.addPost(newPost)
      })
      await Post.bulkCreate(post);
      const dbPostAfter = await Post.findAll();
      dbPostAfter?.length
        ? console.log("PostTable Actualized")
        : console.log("Error in PostTable");
    }
    if (!dbUser?.length) {
      await User.bulkCreate(user);
      const dbUserAfter = await User.findAll();
      dbUserAfter?.length
        ? console.log("UserTable Actualized")
        : console.log("Error in UserTable");
    }
    if (!dbCategory?.length) {
      await Category.bulkCreate(category);
      const dbCategoryAfter = await Category.findAll();
      dbCategoryAfter?.length
        ? console.log("CategoryTable Actualized")
        : console.log('Error in CategoryTable');
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mockData;
