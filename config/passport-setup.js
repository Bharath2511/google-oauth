const passport = require('passport')
const googleStrategy = require('passport-google-oauth20')
const keys = require('./keys')
const User = require('../models/user')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

// passport.deserializeUser((id,done)=>{
//     User.findById(id).then((user)=>{
//         done(null,user)
//     })
    
// })

//using our strategy
passport.use(new googleStrategy({
    //options for google strategy
    callbackURL:'/auth/google/redirect',
    clientID : keys.google.clientID,
    clientSecret : keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
    //passport callback function
//console.log(profile)
//check if user already exists
User.findOne({
    googleId:profile.id
}).then((currentUser)=>{
  if(currentUser) {
      //already have user
      console.log('user is:',currentUser)
      done(null,currentUser)
  } else {
      //create user
      new User({
        googleId: profile.id,
        username: profile.displayName
}).save().then((newUser)=>{
console.log('new user created: '+ newUser)
done(null,newUser)
})
  }
})

})
)