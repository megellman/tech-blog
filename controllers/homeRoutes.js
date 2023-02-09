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
        const blogData = await User.findByPk(req.session.id, {
            include: [
                {
                    model: Blog,
                    attributes: [
                        'post_title',
                        'contents',
                        'date_created',
                    ]
                }
            ]
        });
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
    if(req.session.loggedIn){
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;