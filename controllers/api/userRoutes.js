const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// Create a new user
router.post('/', async (req, res) => {
    try {
        const userPassword = await bcrypt.hash(req.body.password, 10)
        const userData = await User.create({
            username: req.body.username,
            password: userPassword,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(204).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                username: req.body.username,
            },
        });
        if (!userData) {
            res.status(404).json({ message: 'Incorrect username. Please try again!' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.username = userData.username;
            res.session.id = userData.id
            res.status(200).json({ user: userData, message: 'Logged in!' });
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

// Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
     res.status(404).end();   
    }
});


module.exports = router;