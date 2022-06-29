export const postvalue = (state = false,action)=>{
switch (action.type) {
    case 'POSTVALUE':
        return action.payload;        
        break;
    default:
        return false;
        break;
}
}
