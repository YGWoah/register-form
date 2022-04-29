const express = require('express')
const app = express()
const session = require('express-session');
const {dbConnect} = require('./database')
const bodyPsrser = require('body-parser')
const {getIdByEmail} = require('./helpers/getIdByEmail');
const cors = require('cors')
const login = require('./routers/login-roter')
const api = require('./routers/api')
const cookieParser = require('cookie-parser')
const mysqlstore = require('express-mysql-session')
const env = require('dotenv')
//



const corsOptions = {
    credentials: true,
    origin: 'http://localhost:3000',
    sameSite: 'None',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    
}

const options ={
    connectionLimit: 10,
    password: '',
    user: "root",
    database: "sessionDB",
    host: process.env.DB_HOST,
    port:3306,
    createDatabaseTable: true
    
}

const sessionStore = new mysqlstore(options)

const sessionConfig = {
    name: "monster",
    secret:"Whatsap",
    store: sessionStore,
    cookie: {
        maxAge: 1000*60*60,
        secure: false, // for production set to true
        httpOnly :false,
    },
    resave: false,
    saveUninitialized: true
}

//middlewares
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(bodyPsrser.json())
app.use(session(sessionConfig));
app.use(cookieParser())
app.use('/api',api);
app.use('/wiki',login);



app.get('/getcontacts',(req,res)=>{
    const {email,password} = req.body;
    let id= getIdByEmail(email);
    const connection = dbConnect('myDB')
        connection.connect((err)=>{
            if(err) throw err;
            connection.query(`SELECT * FROM contacts WHERE user1ID = '${id}'`,(err,result,feilds)=>{
                if(err) throw err
                res.status(200).json({succese : true,data:result})
                
            })
            connection.end()
        })
})

app.listen(5501,()=>{
    console.log("the server is starting at 5501");
})