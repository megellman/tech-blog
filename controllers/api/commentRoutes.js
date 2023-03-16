const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create({
            creator_username: req.session.username,
            content: req.body.content,
            blog_id: req.params.id,
            user_id: req.session.userId,
        });
res.status(200).json(commentData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;