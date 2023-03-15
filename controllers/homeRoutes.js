const router = require('express').Router();
const { Blog, Comment } = require('../models');

const withAuth = require('../utils/auth');

// GET all blog posts for homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    };
});

// GET all blog posts from user for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.userId,
            },
        });
        if (!blogData) {
            res.render('dashboard', { loggedIn: req.session.loggedIn });
            return;
        }
        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('dashboard', {
            blogs,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        res.status(500).json(err);
    };
});


// Login 
router.get('/login', (req, res) => {
    // If user has already logged in, then they are redirected to the homepage
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// Renders a single blog post to page
router.get('/homepage/:id', withAuth, async (req, res) => {
    try {
        // const singleBlogData = await Blog.findByPk(req.params.id, { include: [{ model: Comment,
        //     attributes: ['creator_username', 'content'] }] });
        //     const comment = singleBlogData.get({ plain: true });
        //     res.render('blog', {
        //         comment,
        //         loggedIn: req.session.loggedIn,
        // });
        const singleBlogData = await Blog.findOne({
            where: {
                id: req.params.id,
            }
        })
        
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    };
})


// Renders blog form to page
router.get('/blog', withAuth, (req, res) => {
    res.render('blogCreate');
});

module.exports = router;