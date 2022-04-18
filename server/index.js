const express = require('express')
const app = express()
const session = require('express-session');
const {dbConnect} = require('./database')
const bodyPsrser = require('body-parser')
const {auth} = require('./_middleware/auth')
const {getIdByEmail} = require('./helpers/getIdByEmail');
const restricted = require('./_middleware/restricted')
//

const sessionConfig = {
    name: "monster",
    secret:"Whatsap",
    cookie: {
        maxAge: 1000*60*60,
        secure: false, // for production set to true
        httpOnly :true,
    },
    resave: false,
    saveUninitialized: true,  
}

//middlewares
app.use(express.urlencoded({ extended: false }))
app.use(bodyPsrser.json())
app.use(session(sessionConfig));



app.post('/signin',(req,res)=>{
    const {name,lastname,email,password} = req.body
    console.log("request is hapening ");
    if(name.length==0||lastname.leangth==0){
        res.status(400).json({succese : false})
        return
    }else{
        const connection = dbConnect('myDB')
        connection.connect((err)=>{
            if(err) throw err;
            connection.query(`INSERT INTO users (LastName, FirstName, email, password) VALUES ('${name}', '${lastname}', '${email}', '${lastname}')`,(err,result,feilds)=>{
                if(err) throw err
                res.status(200).json({succese : true})
                
            })
            connection.end()
        })
    }
})

app.post('/login',[auth,restricted],(req,res)=>{
    console.log("The auth is done")
})


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

app.listen(5500,()=>{
    console.log("the server is starting at 5500");
})