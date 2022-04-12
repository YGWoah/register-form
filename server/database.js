var mysql = require('mysql')

const dbConnect = (db_name)=>{
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: db_name
      })
    return connection  
}

module.exports ={dbConnect}
