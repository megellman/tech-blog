const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.create({
            title: req.body.title,
            contents: req.body.contents,
        });

        if (!blogData) {
            res.status(404).json({ message: 'Invalid title or contents. Please resubmit.' });
            return;
        }

        const blog = blogData.get({ plain: true });

        res.render('dashboard', { blog });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;