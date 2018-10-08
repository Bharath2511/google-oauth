const express = require('express')
const authRoutes = require('./routes/auth-routes')
const profileRoutes = require('./routes/profile-routes')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')
const passport = require('passport')

const app = express()

//set up view engine
app.set('view engine','ejs')

app.use(cookieSession({
    maxAge : 24*60*60*1000,
    keys : [keys.session.cookieKey]
}))

//initialize passport
app.use(passport.initialize())
app.use(passport.session())
// set up routes
app.use('/auth',authRoutes)
app.use('/profile',profileRoutes)


//create home page
app.get('/',(req,res)=>{
    res.render('home',{user:req.user})
})


//connect to mongodb
mongoose.connect(keys.mongoDB.mongoURI,()=>{
    console.log('connected to mongodb')
})


app.listen(2800,()=>{
    console.log('2800')
})
