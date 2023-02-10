const { Comment } = require('../models');

const commentdata = [
  {
    creator_username: 'alesmonde0',
    date_created: 'April 20, 2021 07:00:00',
    content: 'amazing!',
    blog_id: 1,
    user_id: 1,
  },
  {
    creator_username: 'jwilloughway1',  
    date_created: 'June 22, 2021 09:00:00',
    content: 'eh',
    blog_id: 2,
    user_id: 2,
  },
  {
    creator_username: 'iboddam2',  
    date_created: 'September 23, 2021 08:30:00',
    content: 'cool!',
    blog_id: 3,
    user_id: 3,
  },
  {
    creator_username: 'djiri4',    
    date_created: 'December 22, 2020 11:00:00',
    content: 'awesome!',
    blog_id: 4,
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata, {individualHooks: true});

module.exports = seedComments;
