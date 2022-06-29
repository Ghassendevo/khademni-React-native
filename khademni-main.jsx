import react, { useRef, useEffect, useMemo } from 'react'
import { View, TextInput, Image, SafeAreaView, Text, Dimensions, } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindJob from './find-job';
import { Profile } from './profile';
import { Messages } from './messages';
import { Propspal } from './Propspal';
import { Post } from './postComponent';
import Ant from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Evil from 'react-native-vector-icons/EvilIcons'
import SlidingPanel from 'react-native-sliding-up-down-panels';
import { useDispatch, useSelector } from 'react-redux'
export const Khademni = () => {
    const Tab = createBottomTabNavigator();
    const { width, height } = Dimensions.get('window');
    const reftopanel = useRef()
    const dispatch = useDispatch()
    const post = () => {
        return {
            type: 'POST'
        }
    }
    const valuepost = useSelector(state => state.post)
    useEffect(() => {
        reftopanel.current?.onRequestStart()
    }, [valuepost])

    const Baseheight = useMemo(() => {
        if (valuepost) return 100
        else return 0
    }, [valuepost])
    const PostBar = () => {
        return (
            <View style={{
                width,
                height: 100,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{ height: 50, backgroundColor: 'red', justifyContent: 'center', width: '100%', marginTop: 20 }}>
                    <Text>hello</Text>
                </View>
            </View>
        )
    }
    return (
        <>
            {/* {valuepost ? (
                <View style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, }}>
                    <SlidingPanel ref={reftopanel}
                        visible={true}
                        headerLayoutHeight={Baseheight}
                        AnimationSpeed={450}
                        onAnimationStop={() => {
                            dispatch(post())
                        }}
                        headerLayout={() =>
                            <PostBar/>
                        }
                        slidingPanelLayout={() =>
                            <View style={{
                                width,
                                height,
                                backgroundColor: '#7E52A0',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} >
                                <Text >The best thing about me is you</Text>
                            </View>
                        }
                    />
                </View>
            ) : (null)} */}
            <Tab.Navigator
                headerMode='none'
                screenOptions={{
                    presentation: 'modal',
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
                <Tab.Group headerMode='none' screenOptions={{ presentation: 'modal' }}>
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
                                    <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Feather name='search' size={27} style={{ marginRight: 8 }} />
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
                </Tab.Group>
            </Tab.Navigator>
        </>
    )
}