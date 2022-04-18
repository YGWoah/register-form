module.exports = (res,req,next)=>{
    console.log("Session object",req.session);
    next()
}