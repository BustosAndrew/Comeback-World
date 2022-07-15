const mongoose = require("mongoose");

const comment = mongoose.Schema({
    commenter: "string",
    content: "string",
});

const ThreadSchema = mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: false,
    },
    comments: {
        type: [comment],
        required: false,
    },
    upvotes: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Thread = mongoose.model("Thread", ThreadSchema);
module.exports = Thread;
