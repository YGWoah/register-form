var mysql = require('mysql')

const dbConnect = (db_name)=>{
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: 'root',
        password: '',
        database: db_name
      })
    return connection  
}

module.exports ={dbConnect}
