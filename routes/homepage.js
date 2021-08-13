const router = require('express').Router();
const { Blog } = require('../models');
router.get('/', (req, res) => {
    Blog.findAll().then(allBlogs => {
        const blogs = allBlogs.map(blog => blog.get({ plain: true }));
        res.render('homepage', {
            blogs,
            loggedIn: req.session.loggedIn
        });
    })
})

module.exports = router;