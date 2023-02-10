const router = require('express').Router();
const { Blog } = require('../../models');

// Creates a blog post
router.post('/', async (req, res) => {
    try {
        const blogData = await Blog.create({
            post_title: req.body.post_title,
            contents: req.body.contents,
            creator_username: req.session.username,
            user_id: req.session.userId,
        });

        if (!blogData) {
            res.status(404).json({ message: 'Invalid title or contents. Please resubmit.' });
            return;
        }

        const blog = blogData.get({ plain: true });

        res.render('dashboard', { blog });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;