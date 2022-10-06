//schema for users
const mongoose = require('mongoose');

let users = mongoose.Schema({
    role: String,
    username: String,
    password: String
}, {collection: 'users'});


module.exports = mongoose.model('Users', users)


