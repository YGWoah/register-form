const express = require('express')
const router = express.Router()
const {dbConnect} = require('../database')
const {auth} = require('../_middleware/auth')
const restricted = require('../_middleware/restricted')
const {getIdByEmail} = require('../helpers/getIdByEmail')
const getInfoByID = require('../helpers/getInfoById')

router.post('/signin',(req,res)=>{
    console.log("sign in section\n")
    const {name,lastname,email,password} = req.body
    console.log("request is hapening ");
    console.log(req.session)
    console.log("thes");
    if(name.length==0||lastname.leangth==0){
        res.status(400).json({succese : false})
        return
    }else{
        const connection = dbConnect('myDB')
        connection.connect((err)=>{
            if(err) throw err;
            connection.query(`INSERT INTO users (LastName, FirstName, email, password) VALUES ('${name}', '${lastname}', '${email}', '${password}')`,(err,result,feilds)=>{
                if(err) throw err
                res.status(200).json({succese : true})
                
            })
            connection.end()
        })
    }
})

router.post('/login',auth,(req,res)=>{

    console.log("The auth is done")
})


//this route is just for checking
router.get('/check',(req,res)=>{
    req.session.user={email:"email",password:"password"}
    res.json({state:"succes"})
})

router.get('/message',restricted,(req,res)=>{
    res.status(200).json({succes:true,message:"meesage section"})
})



router.post('/addcontact',restricted,(req,res)=>{
    console.log("On addContact section");
    const connection = dbConnect('myDB')
    
    const {userEmail} = req.body;
    let user1ID;
    console.log(req.session.user.email)
    connection.connect((err)=>{
        if(err) throw err;
    
    getIdByEmail(userEmail,connection).then((resp)=>{
        connection.query(`INSERT INTO contacts (user1ID , user2ID ) VALUES ('${req.session.user.id}', '${resp}')`,(err,result,feilds)=>{
                if(err) throw err
                res.status(200).json({succese : true})
                        
                })
        connection.end()
    }).catch(()=>{
        res.status(400).json({succese : false,message:"user isn't found"})
        connection.end()
    })
    })
})



router.get('/allcontacts',restricted,(req,res)=>{
    console.log("On All contacts section \n")
    let newResult=[]
    const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if (err) throw err
        new Promise((resolve,reject)=>{
            connection.query(`SELECT user1ID,user2ID FROM contacts WHERE user1ID = '${req.session.user.id}' OR user1ID = '${req.session.user.id}'`,
            (err,result)=>{
                if(err) throw err
                if (result[0]==undefined){
                    reject()
                }else{
                    resolve(result)
                }
            })
        }).then((resp)=>{
            console.log("req.session.user.id :",req.session.user.id);
            getInfoByID.getConntactsInfo(connection,req.session.user.id,resp,(resp)=>{
                console.log("we in callback function")
                console.log(resp)
                res.status(200).json({succes:true,data:{resp}})
            })
            }).catch(()=>{
                res.status(300).json({succes:true,message:"user has no freinds"})
            })
    })
})

const getContactId = (connection,toID,fromID,callback)=>{
    connection.query(`SELECT contactID FROM contacts WHERE (user1ID = '${toID}' AND user2ID = '${fromID}')
    OR (user1ID = '${fromID}' AND user2ID = '${toID}')`,(err,result)=>{
        if(err) throw err
        callback(result[0].contactID)
    })
}

router.post('/sendmessage',restricted,(req,res)=>{
    const {to,message} = req.body
    let fromID = req.session.user.id
    const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if(err) throw err
        getIdByEmail(to,connection).then((resp)=>{
            getInfoByID.getContactId(connection,resp,fromID,(idContact)=>{
                connection.query(`INSERT INTO messages (idContact , message ,sendeID ) VALUES
                 ('${idContact}' , '${message}' , '${fromID}')`,(err,result)=>{
                     if (err) throw err
                     res.status(200).json({succes:true,message:message})
                     connection.end()
                 })
            })
        })
        
    })
})

router.get('/getallmessages',restricted,(req,res)=>{
    const {withEmail}=req.body
    const connection = dbConnect('myDB')
    connection.connect((err)=>{
        if(err) throw err
        getIdByEmail(to,connection).then((resp)=>{
            getInfoByID.getContactId(connection,resp,fromID,(idContact)=>{
                connection.query(`SELECT *  FROM messages WHERE idContact = '${idContact}')`,
                (err,result)=>{
                     if (err) throw err
                     res.status(200).json({succes:true,message:result[0]})
                     connection.end()
                 })
            })
        })
    })
})



module.exports = router;