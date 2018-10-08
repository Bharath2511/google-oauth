const express = require('express')
const authRoutes = require('./routes/auth-routes')
const passportSetup = require('./config/passport-setup')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookieSession = require('cookie-session')

const app = express()

//connect to mongodb
mongoose.connect(keys.mongoDB.mongoURI,()=>{
    console.log('connected to mongodb')
})

//set up view engine
app.set('view engine','ejs')

app.use(cookieSession({
    maxAge : 24*60*60*1000,
    keys : [keys.session.cookieKey]
}))

// set up routes
app.use('/auth',authRoutes)

app.listen(2800,()=>{
    console.log('2800')
})

//create home page
app.get('/',(req,res)=>{
    res.render('home')
})