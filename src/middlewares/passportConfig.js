const GoogleStrategy = require("passport-google-oauth2").Strategy;
const Users = require("../db/usersModel");

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback",
        passReqToCallback: true
    },
        async (request, accessToken, refreshToken, profile, done) => {
            try {
                let existingUser = await Users.findOne({ 'email': profile.emails[0].value });
                // if user exists return the user
                if (existingUser) {
                    return done(null, existingUser);
                }
                // if user does not exist create a new user
                // console.log('Creating new user...');
                // const newUser = new Users({
                //     method: 'google',
                //     google: {
                //         googleId: profile.id,
                //         name: profile.displayName,
                //         email: profile.emails[0].value
                //     }
                // });
                // await newUser.save();
                // return done(null, newUser);
            } catch (error) {
                return done(error, false)
            }
        }
    ));
}