const express = require('express');
const router = express.Router();
const Thread = require('../models/Thread');
const ResponseDTO = require('../utils/responseDTO');
const validateToken = require('../middlewares/validateToken');

router.post('/create_thread', validateToken, async (req, res) => {
    const { title, caption } = req.body;

    // check if any fields are empty
    const newThreadErrors = [];
    if (!title) {
        newThreadErrors.push('Please include a title in your post.');
    }

    if (newThreadErrors.length === 0) {
        Thread.create({
            author: req.user.username,
            title: title.trim(),
            caption: caption.trim(),
            upvotes: 0,
            date: Date.now(),
        })
            .then((newThread) => {
                res.json(new ResponseDTO(newThread, true));
            })
            .catch((mongoError) => {
                console.error(mongoError);
                res.status(500).json(new ResponseDTO(null, false, mongoError));
            });
    } else {
        res.status(400).json(new ResponseDTO(null, false, [newThreadErrors]));
    }
});
//for viewing any thread normally
router.get('/thread', async (req, res) => {
    const { username, date } = req.body;

    Thread.findOne({ author: username, date: date })
        .then((thread) => {
            res.json(new ResponseDTO(thread, true));
        })
        .catch((mongoError) => {
            console.error(mongoError);
            res.status(500).json(new ResponseDTO(null, false, mongoError));
        });
});

router.get('/forum_threads', async (req, res) => {
    Thread.find({})
        .then((threads) => res.json(new ResponseDTO(threads, true)))
        .catch((mongoError) => {
            console.error(mongoError);
            res.status(500).json(new ResponseDTO(null, false, [mongoError]));
        });
});

router.get('/user_threads', validateToken, async (req, res) => {
    Thread.find({ author: req.user.username })
        .then((threads) => res.json(new ResponseDTO(threads, true)))
        .catch((mongoError) => {
            console.error(mongoError);
            res.status(500).json(new ResponseDTO(null, false, mongoError));
        });
});

router.put('/edit_thread', validateToken, async (req, res) => {
    const { title, caption } = req.body;

    //check if title is empty
    const newEditErrors = [];
    if (!title.trim()) newEditErrors.push('Please include text in your title.');

    if (newEditErrors.length === 0) {
        Thread.findOne({ author: req.user.username })
            .then((thread) => {
                thread.caption = caption.trim();
                thread.title = title.trim();
                thread.save();
                res.json(new ResponseDTO(thread, true));
            })
            .catch((mongoError) => {
                console.error(mongoError);
                res.status(500).json(new ResponseDTO(null, false, mongoError));
            });
    }
});

router.put('/comment', validateToken, async (req, res) => {
    const { comment, date, author } = req.body;

    // check if comment is empty
    const newCommentErrors = [];
    if (!comment.trim()) {
        newCommentErrors.push('Please include text in your comment.');
    }

    if (newCommentErrors.length === 0) {
        Thread.findOne({ author: author, date: date })
            .then((thread) => {
                thread.comments.push({
                    commenter: req.user.username,
                    content: comment,
                });
                thread.save();
                res.json(new ResponseDTO(thread.comments, true));
            })
            .catch((mongoError) => {
                console.error(mongoError);
                res.status(500).json(new ResponseDTO(null, false, mongoError));
            });
    } else {
        res.status(400).json(new ResponseDTO(null, false, [newCommentErrors]));
    }
});

router.put('/upvote', validateToken, async (req, res) => {
    const { upvote, username, date } = req.body;
    Thread.findOne({ author: username, date: date })
        .then((thread) => {
            thread.upvotes += upvote;
            thread.save();
            res.json(new ResponseDTO(thread.upvotes, true));
        })
        .catch((mongoError) => {
            console.error(mongoError);
            res.status(500).json(new ResponseDTO(null, false, mongoError));
        });
});

router.delete('/del_thread', validateToken, async (req, res) => {
    const { date } = req.body;

    Thread.deleteOne({ author: req.user.username, date: date })
        .then(() => {
            res.json(new ResponseDTO(null, true));
        })
        .catch((mongoError) => {
            console.error(mongoError);
            res.status(500).json(new ResponseDTO(null, false, mongoError));
        });
});

module.exports = router;
