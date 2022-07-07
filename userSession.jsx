export const userSession = (state = false, action)=>{
    switch (action.type) {
        case 'USERSESSION':
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}