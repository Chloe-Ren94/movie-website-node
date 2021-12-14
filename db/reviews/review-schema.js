const mongoose = require('mongoose');
const schema = mongoose.Schema({
    imdbID : String,
    movieTitle: String,
    userID: String,
    username: String,
    review: String,
}, {collection: "reviews", timestamps: true});
module.exports = schema;