const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

//using our strategy
passport.use(new googleStrategy({
    //options for google strategy
    callbackURL:'/auth/google/redirect',
    clientID : keys.google.clientID,
    clientSecret : keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
console.log(profile)
})
)