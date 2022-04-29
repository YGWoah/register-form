const express = require('express')
const router = express.Router()
const {dbConnect} = require('../database')
const {auth} = require('../_middleware/auth')
const restricted = require('../_middleware/restricted')





router.post('/',(req,res)=>{
    console.log(req.session)
    res.json({succes:"hell yeah true"})
})

router.post('/gang',(req,res)=>{
    res.json({succes:"true"})
})

module.exports = router;