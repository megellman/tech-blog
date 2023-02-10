const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/:id', async (req, res) => {
    try {
        const commentData = await Comment.create({
            creator_username: req.session.username,
            content: req.body.content,
            blog_id: req.params.id,
            user_id: req.session.userId,
        });

        if (!commentData) {
            res.status(404).json({ message: 'Invalid contents. Please resubmit.' });
            return;
        }

        const comment = commentData.get({ plain: true });

        res.render(`/homepage/${req.params.id}`, { comment });
res.status(200).json({comment});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;