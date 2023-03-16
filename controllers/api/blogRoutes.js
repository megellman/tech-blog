const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

// Creates a blog post
router.post('/', withAuth, async (req, res) => {
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


router.put('/update/:id', withAuth, async (req, res) => {
    try {
        const { post_title, contents } = req.body.updates;

        const blog = await Blog.update({
            post_title,
            contents
        }, {
            where: {
                id: req.params.id,
            },
        });

        if (!blog[0]) {
            res.status(404).json({ message: 'No blog found with this id!' });
            return;
        }
        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;