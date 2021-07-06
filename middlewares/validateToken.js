require('dotenv').config();
const jwt = require('jsonwebtoken');
const ResponseDTO = require('../utils/responseDTO');

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

const validateToken = (req, res, next) => {
    try {
    const { accessToken } = req.cookies;

    // if the request has no cookie
    if (accessToken) {
        const token = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
        req.user = {
            id: token.payload.sub,
            fullName: token.payload.fullName,
            username: token.payload.username,
        }};
    } catch {
        res.status(401).json(
            new ResponseDTO(null, false, ['Please Login to access']),
        );
    }

    next();
};
module.exports = validateToken;
