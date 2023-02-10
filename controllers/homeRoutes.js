const router = require('express').Router();
const { Blog } = require('../models');
const { User } = require('../models');

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
router.get('/dashboard', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.id,
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

router.get('/blog', (req, res) => {
    res.render('blogCreate');
});

module.exports = router;