const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();
const keys = require('./config/keys');


//Order matters defind user model then call the passport
require('./models/User');
require('./services/passport');
mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true
});

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]  
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT); 