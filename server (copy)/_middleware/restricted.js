module.exports = (req,res,next)=>{
    console.log(req.sessionID)
    
    if(req.session.user){
        next()
    }else{
        res.status(401).json({succes:false,message:"u not logged in"})
    }
    
    
}