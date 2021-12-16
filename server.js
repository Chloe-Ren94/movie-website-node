//const MONGODB_URL = 'mongodb://localhost:27017/movies';
const MONGODB_URL = 'mongodb+srv://chloe:chloe@cluster0.n2sec.mongodb.net/movies?retryWrites=true&w=majority'
const express = require('express');
const app = express();
app.enable('trust proxy');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
        "https://modest-yonath-ee1d84.netlify.app");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    cookie: {}
}));

const mongoose = require('mongoose');
mongoose.connect(MONGODB_URL);

require('./services/user-service')(app);
require('./services/review-service')(app);

app.listen(process.env.PORT || 4000);