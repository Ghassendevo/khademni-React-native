 export const islogin = (state = false, action) => {
    switch (action.type) {
        case 'ISLOGIN':
            return  !state;
            break;
        default:
            return false;
            break;
    }
}