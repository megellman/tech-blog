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
        const singleBlogData = await Blog.findOne({
            where: {
                id: req.params.id,
            }
        })
        if(!singleBlogData){
            res.status(404).json({message: "Blog not found"});
            return;
        }
        const blog = singleBlogData.get({plain: true});

        const commentData = await Comment.findAll({
            where: {
                blog_id: req.params.id
            }
        });
        if (commentData) {
            const comments = commentData.map((comment) => comment.get({ plain: true }));
            
            res.status(200).render("blog", {
                blog,
                comments,
                loggedIn: req.session.loggedIn,
            });
        } else {
            res.status(200).render("journal", {
                blog,
                loggedIn: req.session.loggedIn,
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    };
})

// Render create blog form
router.get("/blog", withAuth, async (req, res) => {
    res.render("blogCreate", {
        loggedIn: req.session.loggedIn
    });
});

// Render update blog form
router.get("/blog/update/:id", withAuth, async (req, res) => {
    const blogData = await Blog.findByPk(req.params.id);
    const blog = blogData.get({ plain: true });

    res.render("blogUpdate", {
        loggedIn: req.session.loggedIn,
        blog
    })
})

module.exports = router;