export const loggedin = (state = false,action)=>{
    switch(action.type){
        case 'LOGGED':
            return true;
        default:
            return state
    }
}