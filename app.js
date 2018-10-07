const express = require('express')

const app = express()

//set up view engine
app.set('view engine','ejs')

app.listen(2500,()=>{
    console.log('2500')
})

//create home page
app.get('/',(req,res)=>{
    res.render('home')
})