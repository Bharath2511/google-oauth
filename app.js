const express = require('express')
const authRoutes = require('./routes/auth-routes')
const app = express()

//set up view engine
app.set('view engine','ejs')

// set up routes
app.use('/auth',authRoutes)

app.listen(2700,()=>{
    console.log('2700')
})

//create home page
app.get('/',(req,res)=>{
    res.render('home')
})