import react from 'react'
import { View, TextInput, Image, SafeAreaView, Text } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FindJob } from './find-job';
import { Profile } from './profile';
import { Messages } from './messages';
import { Propspal } from './Propspal';
import Ant from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Evil from 'react-native-vector-icons/EvilIcons'
export const Khademni = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator

            screenOptions={{
                swipeEnabled: true,
                headerShown: false,
                showLabel: true,
                swipeEnabled: true,
                activeTintColor: '#0066ff',
                tabBarStyle: {
                    // shadowOffset: { width: 0.5, height: 0.5 },
                    // shadowOpacity: 0.5,
                    // shadowRadius: 10,
                    // shadowColor: 'gray',
                    borderTopColor: '#0a66c21a',
                    borderTopWidth: 3,
                    height: 85,
                }
            }}
        >
            <Tab.Screen name="Job" component={FindJob}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerStyle: {
                        borderBottomColor: 'red'
                    },
                    headerTitle: props => {
                        return (
                            <Text style={{ fontSize: 17, fontWeight: '700', textAlignVertical: 'center', color: '#000000ad' }}>Jobs</Text>
                        )
                    },
                    headerLeft: props => {
                        return (
                            <Image source={require('./assets/ghassen.jpeg')} style={{ marginLeft: 20, width: 35, height: 35, borderRadius: 10, borderColor: '#0066ff', borderWidth: 1 }} />
                        )
                    },
                    headerRight: props => {
                        return (
                            <View style={{display:'flex',justifyContent:'space-between',flexDirection:'row'}}>
                                <Feather name='search' size={27} style={{marginRight:8}} />
                                <Feather name="bell" size={27} style={{ marginRight: 20 }} />
                            </View>
                        )
                    },
                    tabBarIcon: ({ focused, size, color }) => {
                        return <Material name='briefcase-search-outline' size={26} color={focused ? '#0066ff' : '#80808054'} />
                    }
                }}
            />
            <Tab.Screen name="propspal" component={Propspal}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        return <Material name='post-outline' size={26} color={focused ? '#0066ff' : '#80808054'} />
                    }
                }}
            />
            <Tab.Screen name="messages" component={Messages}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        return <Material name='message-minus-outline' size={26} color={focused ? '#0066ff' : '#80808054'} />
                    }
                }}
            />
            <Tab.Screen name="profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        return <Ant name='user' size={26} color={focused ? '#0066ff' : '#80808054'} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}