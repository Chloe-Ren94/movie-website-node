const model = require('./review-model');

const findReviewsByImdbId = (imdbID) =>
    model.find({imdbID});

const findReviewsByUserId = (userID) =>
    model.find({userID});

const createReview = (review) =>
    model.create(review);

module.exports = {
    findReviewsByImdbId, findReviewsByUserId, createReview
};