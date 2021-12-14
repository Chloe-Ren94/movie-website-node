const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    bio: String,
    email: String,
    location: String,
    birthday: Date,
    type: {type: String, enum: ['COMMON', 'VIP', 'ADMIN'], default: 'COMMON'},
    lists: {type: Array, "default": [{"listname": "favourite", "movies": []}]}
}, {collection: 'users', timestamps: true});
module.exports = userSchema;