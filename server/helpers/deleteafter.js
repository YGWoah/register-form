const data = [
    {
        email: 5
    },
    {
        email: 8
    },
    {

        email: -9
    },
    {
        email: 2
    },
    {
        email: -2
    }
]

const hh=(array,callback)=>{
    const newResult = array.map((message)=>{
        if(message.email>0){
            return({
                h:true
            })
        }else{
            return({
                h:false
            })
        }
    })
    if(array.length==newResult.length){
        callback(newResult)
    }
    
}

hh(data,(resp)=>{
    console.log(resp)})