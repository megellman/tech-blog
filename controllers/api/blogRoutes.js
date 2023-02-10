const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
    try {
        console.log(req.body.title )
        const blogData = await Blog.create({
            post_title: req.body.title,
            contents: req.body.contents,
            creator_username: req.session.username,
            user_id: req.session.id,
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