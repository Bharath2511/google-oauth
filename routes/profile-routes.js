const router = require('express').Router()

const authCheck = (req,res,next) => {
    if(!req.user) {
        // if user is not logged in
        res.redirect('/auth/login')
    } else {
        //if logged in go to next middleware
        next()
    }
}
router.get('/',authCheck,(req,res)=>{
    res.send('profile page of :',req.user.username)
})

module.exports = router