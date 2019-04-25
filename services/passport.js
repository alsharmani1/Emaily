const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'http://localhost:5000/auth/google/callback'
},(accessToken,refreshToken, profile, done) =>{
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}
));
