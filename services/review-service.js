const dao = require('../db/reviews/review-dao');

module.exports = (app) => {
    const findReviewsByImdbId = (req, res) => {
        const id = req.params['id'];
        dao.findReviewsByImdbId(id)
            .then(reviews => res.json(reviews));
    }
    app.get('/api/movies/:id/reviews', findReviewsByImdbId);

    const createReview = (req, res) => {
        const newReview = req.body;
        dao.createReview(newReview)
            .then(insertedReview => res.json(insertedReview));
    }
    app.post('/api/reviews', createReview);
};