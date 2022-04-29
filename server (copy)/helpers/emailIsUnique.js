const {dbConnect} = require('../database')

console.log("function is starting \n");


const emailIsUnique = (email)=>{
    let temp;
    const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if(err) throw err;
        connection.query(`SELECT * FROM users WHERE email = '${email}'`,(err,result,feilds)=>{
            if(err) {return}
            
            if(result.length==0){
                connection.end()
                temp=true;
                console.log("k"+temp)
                return temp;
            }else if(result.length!=0){
                connection.end()
                temp=false;
                console.log("k"+temp)
                return temp;
            }
        })
        
    })
}

module.exports = {emailIsUnique}