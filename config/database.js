const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
        console.log('db connected');
    })
    .catch((err) => {
        console.error(err);
    });

module.exports = mongoose;
