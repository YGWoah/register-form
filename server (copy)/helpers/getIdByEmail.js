const {dbConnect} = require('../database')

let h;

getIdByEmail=(email,connection)=>{
    return new Promise((resolve,reject)=>{
        
        connection.query(`SELECT userID FROM users WHERE email = '${email}'`,(err,result,feilds)=>{
            if(err) throw err
            if(result[0]==undefined){
                reject(false)
            }else{
                resolve(result[0].userID)
                
            }
        })
        
    })
    
}


module.exports = {getIdByEmail}