const express = require('express')
const router = express.Router()
const session = require('express-session');
const {dbConnect} = require('../database')
const bodyPsrser = require('body-parser')
const {auth} = require('../_middleware/auth')
const restricted = require('./_middleware/restricted')


const sessionConfig = {
    name: "monster",
    secret:"Whatsap",
    cookie: {
        maxAge: 1000*60*60,
        secure: false, // for production set to true
        httpOnly :true,
    },
    resave: false,
    saveUninitialized: true,  
}

//middlewares
router.use(express.urlencoded({ extended: false }))
router.use(bodyPsrser.json())
router.use(session(sessionConfig));



router.post('/login',[auth,restricted],(req,res)=>{
    console.log("The auth is done")
})

module.exports = router;