const express = require("express");
const router = express.Router();

router.get("/comeback", async (req, res) => {
    const token = process.env.API_KEY;
    res.send(token);
});

module.exports = router;
