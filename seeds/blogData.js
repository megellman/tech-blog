const { Blog } = require('../models');

const blogdata = [
  {
    post_title: 'The future of technology',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    creator_username: 'alesmonde0',
    date_created: 'April 20, 2021 07:00:00',
    // user_id: 1,
  },
  {
    post_title: 'Learning about JavaScript',
    contents: 'Vitae turpis massa sed elementum tempus egestas sed sed. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec.',
    creator_username: 'jwilloughway1',
    date_created: 'April 20, 2021 07:00:00',
    // user_id: 2,
  },
  {
    post_title: 'Interesting things about MySQL',
    contents: 'Sapien pellentesque habitant morbi tristique senectus et. Montes nascetur ridiculus mus mauris vitae ultricies. ',
    creator_username: 'iboddam2',
    date_created: 'April 20, 2021 07:00:00',
    // user_id: 3,
  },
  {
    post_title: 'Something else interesting',
    contents: 'Turpis egestas integer eget aliquet nibh praesent tristique. Pharetra convallis posuere morbi leo urna molestie at elementum eu.',
    creator_username: 'dstanmer3',
    date_created: 'April 20, 2021 07:00:00',
    // user_id: 4,
  },
];

const seedBlogs = () => Blog.bulkCreate(blogdata, {individualHooks: true});

module.exports = seedBlogs;
