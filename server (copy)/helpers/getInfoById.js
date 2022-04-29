const getConntactsInfo =(connection,askerId,list,callback)=>{
    let contactInfo = [];
    let i=0,j=0;
    let iterator=list[0];
    while(list[i]!=undefined){
        iterator=list[i]
        console.log(iterator.user2ID);
        if(iterator.user1ID!=askerId){
            connection.query(`SELECT LastName,FirstName,email FROM users WHERE userID = '${iterator.user1ID}'`,(err,result,feilds)=>{
                if(err) throw err
                if(result==undefined){
                    return 
                }else{
                    contactInfo.push(result[0])
                }
                j++;
                console.log(j);
                if(i==j){
                    callback(contactInfo)
                }
            })
        }else if(iterator.user2ID!=askerId){
            connection.query(`SELECT LastName,FirstName,email FROM users WHERE userID = '${iterator.user2ID}'`,(err,result,feilds)=>{
            
                if(err) throw err
                if(result==undefined){
                    return 
                }else{
                    contactInfo.push(result[0])
                }
                j++;
                console.log(j);
                if(i==j){
                    callback(contactInfo)
                }
                
            })
        }
        i++;
    }
    
}

const getContactId = (connection,toID,fromID,callback)=>{
    connection.query(`SELECT contactID FROM contacts WHERE (user1ID = '${toID}' AND user2ID = '${fromID}')
    OR (user1ID = '${fromID}' AND user2ID = '${toID}')`,(err,result)=>{
        if(err) throw err
        if(result[0].contactID==undefined){
            console.log("user isnt int the list")
        }else{
            callback(result[0].contactID)
        }
    })
}


module.exports = {getConntactsInfo,getContactId}