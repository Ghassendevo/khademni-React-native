import react from "react"
import { View, Image } from "react-native"
import { useEffect } from "react"

export const Land = ({navigation, route}) => {
    useEffect(()=>{
        setTimeout(() => {
                navigation.navigate('home');
        }, 2000);
    },[])
    return(
        <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'white'}}>
            <Image source={require('./assets/logo.jpg')} style={{width:80,height:60}} />
        </View>
    )
}