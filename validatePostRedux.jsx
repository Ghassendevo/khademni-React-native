export const  validate = (state = false,action)=>{
    switch (action.type) {
        case 'isValidate':
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}