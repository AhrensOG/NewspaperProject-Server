const Post = require("../models/post");
const User = require("../models/user");
const Category = require("../models/category");

const mockData = async () => {
  try {
    const post = [
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://imgv3.fotor.com/images/slider-image/goart_guide_pc_now_2_2021-12-01-073524.jpg",
        description:
          "Lorem ipsum dolor sit amet. Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum deserunt qui ducimus corrupti et aliquam voluptatibus est harum unde. Et alias ratione qui pariatur ducimus eum accusamus quidem eum dignissimos molestiae eum velit impedit non necessitatibus recusandae. Aut quod omnis nam architecto earum ut quia delectus. Aut iste voluptatem qui molestias fugiat sit delectus omnis.",
        viewed: 5,
      },
      {
        title: "Lorem ipsum dolor sit amet",
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

    const dbPost = await Post.findAll();
    const dbUser = await User.findAll();
    const dbCategory = await Category.findAll();

    if (!dbPost?.length) {
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
