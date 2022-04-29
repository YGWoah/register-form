const {dbConnect} = require('../database')
const {getIdByEmail} = require('../helpers/getIdByEmail')
const auth = (req,res,next)=>{
    console.log("in auth finction");
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
                    getIdByEmail(email,connection).then((resp)=>{
                        req.session.user={id:resp,email:email,password:password}
                        res.status(200).json({succes:true})
                        console.log("req.session.user:")
                        console.log(req.session);
                    })
                    
                }else{
                    return res.status(401).json({succes:false})
                }
            }else{
                return res.status(402).json({succes:false})
            }
            
            next()
        })
    }catch{

    }
}

module.exports ={auth}