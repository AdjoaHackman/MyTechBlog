const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: "user_id",
});

Comment.belongsTo(Post, {
    foreignKey: "user_id",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
    as: "comments"
});

User.hasMany(Comment, {
    foreignKey: "user_id",
})

module.exports = { 
    User,
    Post,
    Comment, 
};
