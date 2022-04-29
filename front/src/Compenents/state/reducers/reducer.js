const initialState={ name:"",email:""}


const reducer = (state=[initialState],action)=>{
    switch(action.type){
        case "ChoseMainAcount":
            state= [action.payload];break;
        default :state=[initialState];
    }
    return state;
}

export default reducer;