import { StyleSheet } from "react-native";

export const mainstyle = StyleSheet.create({
    search:{
        width:'100%',
        backgroundColor:'#e5ebf0ab',
        height:40,
        borderRadius:10,justifyContent:'center',
        alignItems:'center',
        
        
    },
    searchinput:{
        height:40,borderRadius:10,width:'90%'
    },
    cat:{
        backgroundColor:'white',
        width:120,
        height:120,
        borderRadius:20,
        shadowColor:'gray',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.2,
        shadowRadius:10,
        margin:10,
        justifyContent:'center',alignItems:'center',
    },
})