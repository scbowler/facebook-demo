const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const io = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;

require('./models/user');
require('./services/passport');

const app = express();

mongoose.connect(keys.mongo_db, {
    useMongoClient: true
});

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookie_key]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth_routes')(app);

app.listen(PORT, () => {
    console.log('Server running at localhost:' + PORT);
});
