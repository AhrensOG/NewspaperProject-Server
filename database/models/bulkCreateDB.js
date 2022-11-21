const Post = require("../models/post");
const User = require("../models/user");
const Category = require("../models/category");
const Tags = require("../models/tags");

const mockData = async () => {
  try {
    const post = [
      {
        title: "THE GREAT DEBATE: WHO IS DEFINING THE NEW WORLD ORDER? STAY TUNED TO KNOW MORE-1",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/5-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Highway Code: Everything you need to know as road rules change from today, check the new restrictions-1",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/40-696x647.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Dozing from home: how homeworkers have perfected the art of napping on the job this period",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/30-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "'Go home!': Ukrainian protesters confront Russian military vehicles in Kherson-1",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/1-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "'We have no economic relations with Russia now' says IMF chief in this Tuesday morning-1",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/12-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "A man continues to collect his rubbish in an unusual fashion - on the back of a horse",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/47-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Anne Hathaway's Fyre Festival Unicorn - and other films and TV shows to watch in this week",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/33-696x369.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Baby Neonate (newly-hatched) deepwater ghost shark discovered off South Island",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/45-696x392.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "THE GREAT DEBATE: WHO IS DEFINING THE NEW WORLD ORDER? STAY TUNED TO KNOW MORE-2",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/5-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Highway Code: Everything you need to know as road rules change from today, check the new restrictions-2",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/40-696x647.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "'Go home!': Ukrainian protesters confront Russian military vehicles in Kherson-2",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/1-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Man, 96, who survived four Nazi concentration camps killed during Russian attack-1",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/3-696x373.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Fuel poverty: Worst hit areas revealed as two in five households set to be affected",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/4-696x481.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Man, 96, who survived four Nazi concentration camps killed during Russian attack-2",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/3-696x373.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Zelensky: He is ready to negotiate with Putin, it could mean 'a third World War'",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/2-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Food bank users declining potatoes as cooking costs too high, says Iceland boss for CN",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/29-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "'Go home!': Ukrainian protesters confront Russian military vehicles in Kherson-3",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/1-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "LATEST UPDATE: Camelot fined more than £3.000 over series of National Lottery errors",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/28-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Oil price retreat likely to be short-lived as demand will outstrip supply in ahead",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/27-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "More than 600,000 hectares have been burned by wildfires in recent weeks across Argentina",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/18-696x396.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Rich nations must find the money to protect people from the impacts of climate change",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/17-696x554.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Queensland Reconstruction Authority show the rapid rise and slow draining of severe floods",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/16-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "'We have no economic relations with Russia now' says IMF chief in this Tuesday morning-2",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
        "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/12-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "WARMER WEATHER WREAKS HAVOC WITH HAY FEVER SYMPTOMS AS TREE POLLEN SPIKES, NEW RESEARCHES",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/13-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Terror suspect killed MP in 'frenzied attack' after targeting Michael Gove, court hears",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/11-696x874.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Therese Coffey commits to pension rise policy being honoured for the remainder of the Parliament",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/10-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "LATEST UPDATE: Kylie Jenner and Travis Scott ditch baby Wolf's name as it didn't 'feel' right",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/36-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "The 13-hour, spectacular sights of Britain's longest train adventure offers epic snapshots of both cities",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/42-696x464.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Video calls recommandation : 'You've got to be careful with glasses on Zoom' says etiquette expert",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/24-696x522.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
        viewed: 5,
      },
      {
        title: "Researchers have discovered how pandas are able to gain weight on a bamboo diet",
        subTitle:
          "Ad cumque perspiciatis qui voluptatem iste qui omnis veniam aut rerum",
        image:
          "https://demo.tagdiv.com/newspaper_chained_news_pro/wp-content/uploads/2022/03/48-696x463.jpg",
        description:
          "Dyson has announced its most unusual product yet; a wearable air purifier with a pair of noise-cancelling headphones built in. An initial reveal of the Zone headphones - the first headphones Dyson has released - doesn't come with many specifics about cost or battery life, nor how much the headset weighs. Where did this come from? Dyson said it started having internal conversations in 2016 about developing some kind of 'purification on the move' technology, based on its existing air purification technology. During initial trials in the smoggy city of Beijing the company struck upon the idea of integrating noise-cancelling headphones. Doing this also meant the company was able to design the headset so the air filters could be placed.",
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
        name: "Mundo",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Politica",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Clima",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Ciencia",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Deportes",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Arte",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Viaje",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
      {
        name: "Add",
        image:
          "https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMTEvODllZGM0NDItNjY3OC00ZmMxLTliM2ItNTFlYTM2YWYxMDNlLmpwZw==.jpg",
      },
    ];
    const tags = [
      {
        name: "Selecciones de hoy",
      },{
        name: "Recientes",
      },{
        name: "Tendencias",
      },{
        name: "Importante",
      },{
        name: "Mas de categorias",
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

    if (!dbPost?.length) {

      for (let i = 0; i < post.length; i++) {
        if(i >= 0 && i <= 2) {
          const Tag = await Tags.findByPk(1)
          const category = await Category.findByPk(1)
          await Post.create({
            title: post[i].title,
            subTitle: post[i].subTitle,
            image: post[i].image,
            description: post[i].description,
            viewed: post[i].viewed
          })
          const newPost = await Post.findOne({ where: { title: post[i].title } })
          await Tag.addPost(newPost)
          await newPost.addCategory(category)
        }
        if(i >= 3 && i <=7) {
          const Tag = await Tags.findByPk(2)
          const category = await Category.findByPk(2)
          await Post.create({
            title: post[i].title,
            subTitle: post[i].subTitle,
            image: post[i].image,
            description: post[i].description,
            viewed: post[i].viewed
          })
          const newPost = await Post.findOne({ where: { title: post[i].title } })
          await Tag.addPost(newPost)
          await newPost.addCategory(category)
        }
        if(i >= 8 && i <=11) {
          const Tag = await Tags.findByPk(3)
          const category = await Category.findByPk(3)
          await Post.create({
            title: post[i].title,
            subTitle: post[i].subTitle,
            image: post[i].image,
            description: post[i].description,
            viewed: post[i].viewed
          })
          const newPost = await Post.findOne({ where: { title: post[i].title } })
          await Tag.addPost(newPost)
          await newPost.addCategory(category)
        }
        if(i >= 12 && i <= 25) {
          const Tag = await Tags.findByPk(4)
          const category = await Category.findByPk(4)
          await Post.create({
            title: post[i].title,
            subTitle: post[i].subTitle,
            image: post[i].image,
            description: post[i].description,
            viewed: post[i].viewed
          })
          const newPost = await Post.findOne({ where: { title: post[i].title } })
          await Tag.addPost(newPost)
          await newPost.addCategory(category)
        }
        if(i >= 26 && i <= 29) {
          const Tag = await Tags.findByPk(5)
          const category = await Category.findByPk(5)
          await Post.create({
            title: post[i].title,
            subTitle: post[i].subTitle,
            image: post[i].image,
            description: post[i].description,
            viewed: post[i].viewed
          })
          const newPost = await Post.findOne({ where: { title: post[i].title } })
          await Tag.addPost(newPost)
          await newPost.addCategory(category)
        }
      }
      const dbPostAfter = await Post.findAll();
      dbPostAfter?.length
        ? console.log("PostTable Actualized")
        : console.log("Error in PostTable");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mockData;
