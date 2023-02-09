const { Comment } = require('../models');

const commentdata = [
  {
    creator_username: 'awesomesauce302',
    date_created: 'April 20, 2021 07:00:00',
    blod_id: 'June 21, 2021 17:00:00',
    user_id: 1,
  },
  {
    creator_username: '2cool4skool',  
    date_created: 'June 22, 2021 09:00:00',
    blod_id: 'September 22, 2021 22:00:00',
    user_id: 2,
  },
  {
    creator_username: 'soccercrazy405',  
    date_created: 'September 23, 2021 08:30:00',
    blod_id: 'December 21, 2021 20:30:00',
    user_id: 3,
  },
  {
    creator_username: 'dreamer44',    
    date_created: 'December 22, 2020 11:00:00',
    blod_id: 'March 19, 2021 19:00:00',
    user_id: 4,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;
