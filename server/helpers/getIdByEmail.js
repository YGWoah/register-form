const {dbConnect} = require('../database')

const getIdByEmail = (email)=>{
    const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if(err) throw err;
        connection.query(`SELECT userID FROM user WHERE email = '${email}'`,(err,result,feilds)=>{
            if(err) {return}
            res.status(200).json({succese : true})
            if(result==undefined){
                connection.end()
                return null;
            }else{
                connection.end()
                return result;
            }
        })
        
    })
}

module.exports = {getIdByEmail}