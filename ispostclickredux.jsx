export const  ispostclick = (state = false , action)=>{
    switch (action.type) {
        case 'ISPOSTCLICK':
            return action.payload;            
            break;
        default:
            return 0;
            break;
    }
}