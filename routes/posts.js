const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    // try {
    //     const posts = await Post.find();
    //     res.json();
    // } catch (err) {
    //     res.json({ message: err });
    // }
    res.send("we are posts");
});

// router.get('/specific', (req, res) => {
//     res.send("Specific posts");
// });

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // try {
    //     const savedPost = await post.save();
    //     res.json(savedPost);
    // } catch (err) {
    //     res.json({ message: err });
    // }

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        });
});

module.exports = router;