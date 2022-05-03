import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    home_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    home_main: {
        flex: 1,
        justifyContent: 'center',
        width: '80%',
        height: '80%',
    },
    text_font: {
        fontWeight: '700',
        fontSize: 25
    },
    new_font: {
        fontSize: 15,
        color: 'gray',
    },
    home_all: {
        height: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    touchableone: {
        width: '100%',
        backgroundColor: '#f6f6f6',
        height: 60,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputone: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        color: 'black',
    },
    viewone: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', alignItems: 'center',
        width: '90%', 
    }, 
    login:{
        width:'100%', 
        display:'flex',
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:'#0066ff',
        height:55,
        borderRadius:10,
    },
});
