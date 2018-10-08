const router = require('express').Router()
const passport = require('passport')
//auth login
router.get('/login',(req,res)=>{
    res.render('login')
})

//auth logout
router.get('/logout',(req,res)=>{
    res.send('logging out')
})

//auth with google
router.get('/google',passport.authenticate("google",{
    //what we want to retrieve from the user's profile
    scope:['profile']
}))

//callback route to redirect
router.get('/google/redirect',passport.authenticate('google'),(req,res)=>{
    res.send('you reached a callback uri')
})

module.exports = router