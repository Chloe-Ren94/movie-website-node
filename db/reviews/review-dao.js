const model = require('./review-model');

const findReviewsByImdbId = (imdbID) =>
    model.find({imdbID});

const createReview = (review) =>
    model.create(review);

module.exports = {
    findReviewsByImdbId, createReview
};