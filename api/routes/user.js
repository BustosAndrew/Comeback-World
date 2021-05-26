const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
const ResponseDTO = require('../utils/responseDTO');
const validateToken = require('../middlewares/validateToken');

const saltRounds = 10;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

/**
 *
 * @param {express.Response} res - express response object
 * @param {User} user - the user being passed in
 *
 * this function writes the token to httpOnly cookies
 * so that validateToken middleware can check to see
 * if user is authenticated for endpoints that requires authentication
 */
const assignToken = (res, user) => {
    const payload = {
        fullName: user.fullName,
        sub: user._id,
        username: user.username,
    };

    const accessToken = jwt.sign({ payload }, ACCESS_TOKEN_SECRET);
    return res.cookie('accessToken', accessToken, { httpOnly: true });
};

/**
 * User Registration Endpoint:
 * 
 * POST('/users/register')
 * with json body:
 * {
    "email": "ryan@example.com",
    "fullName": "Ryan H",
    "username": "213edu",
    "password": "123qwe",
    "password2": "123qwe"
    }
 * 
 */

router.post('/register', async (req, res) => {
    const {
        username, //
        email,
        fullName,
        password,
        password2,
    } = req.body;

    // validation for new user registration

    // check if any fields are empty
    const registrationErrors = [];
    if (!email || !username || !fullName || !password || !password2) {
        registrationErrors.push('Please fill out all fields');
    }

    // check if email is valid
    if (!validator.isEmail(email)) {
        registrationErrors.push('Invalid E-mail Address');
    }

    // check if the passwords match
    if (password !== password2) {
        registrationErrors.push('passwords Does Not Match');
    }

    // TODO check password strength
    if (password.length < 6) {
        registrationErrors.push('Password needs to be at least 6 characters');
    }

    // check if email or username has been registered
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
        registrationErrors.push(
            'Email Address / Username has already been registered',
        );
    }

    // if no errors at all, create the user
    if (registrationErrors.length === 0) {
        bcrypt.hash(
            password,
            saltRounds,
            function (bcryptError, hashedPassword) {
                if (bcryptError) {
                    throw bcryptError;
                }

                User.create({
                    email: email.trim(),
                    password: hashedPassword,
                    fullName: fullName.trim(),
                    username: username.trim(),
                })
                    .then((newUser) => {
                        // assign user token, then return user as object
                        // user is logged in at this point
                        assignToken(res, newUser);
                        res.json(new ResponseDTO(newUser, true));
                    })
                    .catch((mongoError) => {
                        console.error(mongoError);
                        res.status(500).json(
                            new ResponseDTO(null, false, mongoError),
                        );
                    });
            },
        );
    } else {
        res.status(400).json(
            new ResponseDTO(null, false, [registrationErrors]),
        );
    }
});

router.post('/login', async (req, res) => {
    const {
        username, //
        password,
    } = req.body;

    // locate the user in the database
    const user = await User.findOne({ username });

    // if user found
    if (user) {
        // check user's password
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            // logs user in
            assignToken(res, user);
            res.json(new ResponseDTO(user, true));
        } else {
            res.json(new ResponseDTO(null, false, ['Incorrect Password']));
        }
    }
});

/**
 * User Login Endpoint:
 * 
 * POST('/users/login')
 * with json body:
 * {
    "username": "213edu",
    "password": "123qwe",
    }
 * 
 */

router.get('/test', validateToken, (req, res) => {
    res.json(req.user);
});
module.exports = router;
