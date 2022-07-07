export const jobsredux = (state = false,action) =>{
    switch (action.type) {
        case 'ADDJOB':
            return action.payload; 
            break;
        default:
           return false;
            break;
    }
}