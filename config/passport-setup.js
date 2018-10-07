const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

//using our strategy
passport.use(new googleStrategy({
    //options for google strategy
    clientID : keys.google.clientID,
    clientSecret : keys.google.clientSecret
}),()=>{
    //passport callback function

})