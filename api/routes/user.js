const express = require('express');
const validator = require('validator');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/User');
const responseDTO = require('../utils/responseDTO');
const ResponseDTO = require('../utils/responseDTO');

const saltRounds = 10;

router.get('/', (req, res) => {
    res.send('hello');
});

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
                        res.json(new ResponseDTO(newUser, true));
                    })
                    .catch((mongoError) => {
                        res.status(500).json(
                            new ResponseDTO(null, false, [mongoError]),
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

module.exports = router;
