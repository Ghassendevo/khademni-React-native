import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, Image } from 'react-native';
import { styles } from './style';
import Icon from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
export const Home = ({ navigation, route }) => {
    const [focusinputone, setfocusInputone] = useState(false);
    const [focusinputtwo, setfocusInputtwo] = useState(false);
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [loginusername, setloginUsername] = useState('');
    const [loginpassword, setloginPassword] = useState('');
    const [passwordvisibility, setpasswordVisibility] = useState(true);
    const [loginstatus, setloginStatus] = useState(false);
    const [isloading, setisLoading] = useState(false);
    const [userSession, setuserSession] = useState({
        id: null,
        user: '',
        password: '',
    })
    const dispatch = useDispatch();
    const [id, setId] = useState(false);
    const islogin = useSelector(state => state.islogin)

    const Login = () => {
        const userSessionData = {
            id: id,
            user: loginpassword,
            password: loginpassword,
        }
        const dispatchuserSession = (e) => {
            return {
                type: 'USERSESSION',
                payload: e,
            }
        }
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value)
                await AsyncStorage.setItem('userSession', jsonValue)
            } catch (err) {
                // saving error
                alert(err)
            }
        }
        if (loginusername !== '' && loginpassword !== '') {
            setisLoading(true);
            const data = { username: loginusername, password: loginpassword };
            axios.post(`http://172.20.10.12:3000/login`, {
                data: data,
            }).then(res => {
                setisLoading(false)
                if (res.data.msg) {
                    dispatch(dispatchuserSession({
                        id: res.data.id,
                        username: loginusername,
                        password: loginpassword,
                    }))
                    setId(res.data.id)
                    setloginStatus(false)
                    setuserSession({
                        id: res.data.id,
                        username: loginusername,
                        password: loginpassword,
                    })
                    storeData(userSessionData)
                    navigation.navigate('find', { id: res.data.id, username: loginusername, password: loginpassword,job:false })
                    const anothervalue = AsyncStorage.getItem('userSession')

                }
                else {
                    setloginStatus(true);
                    stopTime();
                }
            })
        }


    }
    const stopTime = () => {
        setTimeout(() => {
            setloginStatus(false)
        }, 2000);
    }
    return (
        <View style={styles.home_container}>
            <View style={styles.home_main}>
                <View style={styles.home_all}>
                    <View style={{ height: keyboardStatus ? '5%' : '10%', }}>
                        <Image source={require('./assets/logo.jpg')} style={{ width: 60, height: 50 }} />
                    </View>
                    <View style={{ height: '5%', }}>
                        <Text style={styles.text_font}>
                            Hey ,
                        </Text>
                        <Text style={styles.text_font}>
                            Login now
                        </Text>

                        <Text style={styles.new_font}>
                            {"\n"}
                            if your are new / <Text style={{ fontWeight: '700', fontSize: 15, color: 'black' }} onPress={e => navigation.navigate('sign')}>Create now</Text>
                        </Text>
                    </View>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}

                    >
                        <View style={{ height: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderColor: loginstatus ? 'red' : (focusinputone ? '#0066ff' : '#f6f6f6'), borderWidth: 1, ...styles.touchableone }} >
                                <View style={styles.viewone}>
                                    <Icon name="user" backgroundColor="#3b5998" size={18} />
                                    <TextInput placeholder='username or phone ' autoCapitalize='none' style={styles.inputone}
                                        onPressIn={e => { setfocusInputone(true), setfocusInputtwo(false), setKeyboardStatus(true) }}
                                        onChangeText={e => setloginUsername(e)}
                                    />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderColor: loginstatus ? 'red' : (focusinputtwo ? '#0066ff' : '#f6f6f6'), borderWidth: 1, marginTop: 20, ...styles.touchableone }}>
                                <View style={styles.viewone}>
                                    <Ant name="lock" backgroundColor="#3b5998" size={18} />
                                    <TextInput secureTextEntry={passwordvisibility} placeholder='password' onPressIn={e => { setfocusInputtwo(true), setfocusInputone(false), setKeyboardStatus(true) }} autoCapitalize='none' style={{ width: loginpassword !== '' ? '80%' : '90%', ...styles.inputtwo }}
                                        onChangeText={e => setloginPassword(e)}
                                    />
                                    {
                                        loginpassword !== '' ? (passwordvisibility && <Material name='visibility-off' size={18} onPress={e => setpasswordVisibility(false)} /> || <Material name='visibility' size={18} onPress={e => setpasswordVisibility(true)} />) : null
                                    }

                                </View>
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'left', width: '100%', marginTop: 10 }}>
                                Forgot password ? / <Text style={{ color: 'black', fontWeight: '600' }}>Reset</Text>
                            </Text>
                            {loginstatus && <Text style={{ color: 'red', textAlign: 'left', width: '100%', marginTop: 10 }}>
                                Incorrect information
                            </Text>}
                        </View>
                    </KeyboardAvoidingView>

                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ position: 'absolute', bottom: 40, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
                >
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: loginusername !== '' && loginpassword !== '' ? '#0066ff' : '#eeee', ...styles.login }} onPress={Login}>
                            {!isloading && <Text style={{ color: 'white', fontSize: 20 }}>
                                Login
                            </Text> || <ActivityIndicator color='white' />}


                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, color: '#0066ff' }} onPress={e => navigation.navigate('sign')}>Create account</Text>
                    </View>
                </KeyboardAvoidingView>
            </View>

        </View>
    )
}