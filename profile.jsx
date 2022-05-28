import react from "react"
import { View, Text ,SafeAreaView} from "react-native"


export const Profile = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <SafeAreaView>
                <Text>
                    Profile
                </Text>
            </SafeAreaView>
        </View>
    )
}