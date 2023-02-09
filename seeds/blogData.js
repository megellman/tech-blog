const { Blog } = require('../models');

const blogdata = [
  {
    post_title: 'Let\'s Go',
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    creator_username: 'awesomesauce302',
    date_created: 'April 20, 2021 07:00:00',
    user_id: 1,
  },
  {
    post_title: 'Wow',
    contents: 'Vitae turpis massa sed elementum tempus egestas sed sed. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Blandit aliquam etiam erat velit scelerisque. Libero enim sed faucibus turpis in eu mi. Vitae nunc sed velit dignissim sodales ut eu sem integer. Pellentesque id nibh tortor id aliquet. Amet venenatis urna cursus eget nunc scelerisque viverra. Senectus et netus et malesuada fames ac turpis egestas. Eget velit aliquet sagittis id. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Quisque non tellus orci ac. Dui sapien eget mi proin sed libero enim sed. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Non nisi est sit amet facilisis magna etiam tempor.',
    creator_username: '2cool4skool',
    date_created: 'April 20, 2021 07:00:00',
    user_id: 2,
  },
  {
    post_title: 'Cool',
    contents: 'Sapien pellentesque habitant morbi tristique senectus et. Montes nascetur ridiculus mus mauris vitae ultricies. Tellus integer feugiat scelerisque varius. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Sed nisi lacus sed viverra. Volutpat lacus laoreet non curabitur gravida arcu ac. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Et magnis dis parturient montes nascetur ridiculus mus mauris. Praesent elementum facilisis leo vel. Vel orci porta non pulvinar. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Varius quam quisque id diam vel quam elementum pulvinar. In egestas erat imperdiet sed euismod nisi. Gravida arcu ac tortor dignissim convallis aenean et.',
    creator_username: 'soccercrazy405',
    date_created: 'April 20, 2021 07:00:00',
    user_id: 3,
  },
  {
    post_title: 'Awesome',
    contents: 'Turpis egestas integer eget aliquet nibh praesent tristique. Pharetra convallis posuere morbi leo urna molestie at elementum eu. Vitae justo eget magna fermentum. Sit amet dictum sit amet justo donec enim. Id semper risus in hendrerit gravida rutrum quisque non. At consectetur lorem donec massa sapien faucibus. Nam libero justo laoreet sit amet cursus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Tellus orci ac auctor augue mauris augue neque gravida. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Vitae auctor eu augue ut lectus arcu bibendum. Odio aenean sed adipiscing diam donec adipiscing tristique. Ut pharetra sit amet aliquam id diam maecenas. Dictumst quisque sagittis purus sit amet volutpat consequat. Vestibulum sed arcu non odio. Ullamcorper malesuada proin libero nunc. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Enim tortor at auctor urna nunc id cursus. Dictum varius duis at consectetur.',
    creator_username: 'dreamer44',
    date_created: 'April 20, 2021 07:00:00',
    user_id: 4,
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;
