const express = require('express')
const app = express()
const {dbConnect} = require('./database')
const bodyPsrser = require('body-parser')

//get all students
app.get("/students",(req,res)=>{
const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if(err) throw err;
        connection.query("SELECT * FROM students",(err,result,feilds)=>{
            if(err) throw err
            result
            console.log(result)
            res.json({status:"succes",value:result})
            
        })
        connection.end()
    })
})

//get one single student
app.get("/student",(req,res)=>{
    const connection = dbConnect('myDB')
    let name=req.query.name
    connection.connect((err)=>{
        if(err) throw err;
        connection.query("SELECT * FROM students WHERE name = '"+name+"'",(err,result,feilds)=>{
            if(err) throw err
            console.log(result)
            res.json({value:result})
            
        })
        connection.end()
    })
})

//middleware
app.use(express.urlencoded({ extended: false }))
app.use(bodyPsrser.json())

app.post('/login',(req,res)=>{
    const {name,lastname,email,password} = req.body
    const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if(err) throw err;
        connection.query(`INSERT INTO students (name, lastname) VALUES ('${name}', '${lastname}')`,(err,result,feilds)=>{
            if(err) throw err
            console.log(result)
            res.status(200).json({succese : true})
            
        })
        connection.end()
    })


})

app.listen(5500,()=>{
    console.log("the server is starting at 5500");
})