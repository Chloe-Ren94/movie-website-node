const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username: String,
    password: String,
    type: {type: String, enum: ['COMMON', 'VIP', 'ADMIN'], default: 'COMMON'},
    lists: {type: Array, "default": [{"listname": "my favourite", "movies": []}]}
}, {collection: 'users', timestamps: true});
module.exports = userSchema;