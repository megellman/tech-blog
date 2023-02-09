const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

User.hasMany(Blog, {
    foreignKey: 'blog_id',
});

Blog.belongsTo(User, {
    foreignKey: 'user_id',
});




module.exports = { Blog, User, Comment };

