const {dbConnect} = require('../database')

const auth = (req,res,next)=>{
    try{
        const {email,password} = req.body
        const connection = dbConnect('myDB')
        connection.query(`SELECT * FROM users WHERE email = '${email}'`,(err,result,feilds)=>{
            if(err) {res.status(400).json({succes:false});
                return;}
            let data = JSON.stringify(result)
            data = JSON.parse(data)
            console.log(data[0])
            console.log("EMAIL :",email)
            if(data[0]!=undefined){
                if(password==data[0].password){
                    res.json({succes:true,id:data[0].userID})
                }else{
                    res.status(401).json({succes:false})
                }
            }else{
                res.status(402).json({succes:false})
            }
            
            next()
        })
    }catch{

    }
}

module.exports ={auth}