export const choseMainAcc = (v)=>{
    return (dispatch)=>{
        dispatch({
            type:"ChoseMainAcount",
            payload:v
        })
    }
}