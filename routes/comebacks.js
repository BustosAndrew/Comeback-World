const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/comeback', async (req, res) => {
    const token = process.env.API_KEY;
    const url = 'https://generatorfun.com/consumeapi.php?api=';
    axios
        .get(url + token)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.send(error);
        });
});

module.exports = router;
