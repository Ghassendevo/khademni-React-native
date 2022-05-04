import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, Image, SafeAreaView, ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { styles } from "./style";
import Icon from 'react-native-vector-icons/Feather';
import Ant from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialIcons';
import Octi from 'react-native-vector-icons/Octicons';
import axios from "axios";
export const Sign = ({ navigation, route }) => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);
    const [focusinputone, setfocusInputone] = useState(false);
    const [focusinputoneone, setfocusInputoneone] = useState(false);
    const [focusinputtwo, setfocusInputtwo] = useState(false);
    const [focusinputtwotwo, setfocusInputtwotwo] = useState(false);
    const [passwordvisibility, setpasswordVisibility] = useState(true);
    const [loginusername, setloginUsername] = useState('');
    const [loginpassword, setloginPassword] = useState('');
    const [isloading, setisLoading] = useState(false)
    const [serverrespond, setserverRespond] = useState(true)
    const [passwordistrue, setpasswordistrue] = useState(true)
    const [userdata, setuserData] = useState({
        username: '',
        fullname: '',
        password: '',
        confirmpassword: '',
    })
    const createAccount = () => {
        if (userdata.username == '' || userdata.fullname == '' || userdata.password == '' || userdata.confirmpassword == '') {
            null
        } else {
            setisLoading(true)
            if (userdata.password == userdata.confirmpassword) {
                axios.post(`http://172.20.10.12:3000/sign`, {
                    data: userdata,
                }).then(res => {
                    if (res.data == 'new') setserverRespond(true)
                    else setserverRespond(false), setTimeout(() => {
                            setserverRespond(true)
                    }, 1000);
                    setisLoading(false)
                }).catch(err => { alert(err) })
            } else {
                setpasswordistrue(false)
                setisLoading(false)
                setTimeout(() => {
                    setpasswordistrue(true)
                }, 1000);
            }
        }
    }

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });
    }, []);

    return (
        <>
            <SafeAreaView style={{ backgroundColor: 'white', width: '100%' }}>
                <View style={{ width: '85%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <Icon name="arrow-left" size={30} onPress={e => navigation.navigate('home')} />
                </View>
            </SafeAreaView>

            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white', justifyContent: 'center' }}>
                <KeyboardAvoidingView style={{ height: '80%' }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <SafeAreaView style={{ height: '100%', width: '85%', }}>
                        <View>
                            <Text style={{ fontSize: 30, fontWeight: '700', letterSpacing: 0.7 }}>
                                Create Account ,
                            </Text>
                            <Text style={{ marginTop: 5, color: 'gray', fontSize: 18, letterSpacing: 0.7 }}>
                                Sign up to get started
                            </Text>
                        </View>

                        <View style={{ height: '55%', justifyContent: 'space-between', marginTop: 60 }}>
                            <TouchableOpacity style={{ borderColor: focusinputone ? '#0066ff' : '#f6f6f6', borderWidth: 1, ...styles.touchableone }} >
                                <View style={styles.viewone} >
                                    <Icon name="user" backgroundColor="#3b5998" size={18} />
                                    <TextInput placeholder='username or phone ' autoCapitalize='none' style={styles.inputone}
                                        onPressIn={e => { setfocusInputone(true), setfocusInputtwo(false), setfocusInputoneone(false), setKeyboardStatus(true) }}
                                        onChangeText={e => setuserData({ ...userdata, username: e })}
                                    />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ borderColor: focusinputoneone ? '#0066ff' : '#f6f6f6', borderWidth: 1, ...styles.touchableone }} >
                                <View style={styles.viewone}>
                                    <Ant name="idcard" backgroundColor="#3b5998" size={18} />
                                    <TextInput placeholder='full name ' autoCapitalize='none' style={styles.inputone}
                                        onPressIn={e => { setfocusInputoneone(true), setfocusInputone(false), setfocusInputtwo(false), setKeyboardStatus(true) }}
                                        onChangeText={e => setuserData({ ...userdata, fullname: e })}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: focusinputtwo ? '#0066ff' : '#f6f6f6', borderWidth: 1, ...styles.touchableone }}>
                                <View style={styles.viewone}>
                                    <Ant name="lock" backgroundColor="#3b5998" size={18} />
                                    <TextInput secureTextEntry={passwordvisibility} placeholder='password' onPressIn={e => { setfocusInputtwo(true), setfocusInputone(false), setfocusInputoneone(false), setfocusInputtwotwo(false), setKeyboardStatus(true) }} autoCapitalize='none' style={{ width: loginpassword !== '' ? '80%' : '90%', ...styles.inputtwo }}
                                        onChangeText={e => setuserData({ ...userdata, password: e })}
                                    />
                                    {
                                        loginpassword !== '' ? (passwordvisibility && <Material name='visibility-off' size={18} onPress={e => setpasswordVisibility(false)} /> || <Material name='visibility' size={18} onPress={e => setpasswordVisibility(true)} />) : null
                                    }

                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderColor: passwordistrue ? (focusinputtwotwo ? '#0066ff' : '#f6f6f6') : ('red'), borderWidth: 1, ...styles.touchableone }}>
                                <View style={styles.viewone}>
                                    <Ant name="key" backgroundColor="#3b5998" size={18} />
                                    <TextInput secureTextEntry={passwordvisibility} placeholder='confirm password' onPressIn={e => { setfocusInputtwotwo(true), setfocusInputone(false), setfocusInputoneone(false), setfocusInputtwo(false), setKeyboardStatus(true) }} autoCapitalize='none' style={{ width: loginpassword !== '' ? '80%' : '90%', ...styles.inputtwo }}
                                        onChangeText={e => setuserData({ ...userdata, confirmpassword: e })}
                                    />
                                    {
                                        loginpassword !== '' ? (passwordvisibility && <Material name='visibility-off' size={18} onPress={e => setpasswordVisibility(false)} /> || <Material name='visibility' size={18} onPress={e => setpasswordVisibility(true)} />) : null
                                    }

                                </View>
                            </TouchableOpacity>
                            {!serverrespond && <Text style={{ color: 'red' }}>
                                Username is Already exist , try another
                            </Text>}
                        </View>

                    </SafeAreaView>
                </KeyboardAvoidingView>
                <View style={{ position: 'absolute', bottom: 60, width: '85%' }}>
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={createAccount} style={{ backgroundColor: '#0066ff', ...styles.createAccount }} >

                            {isloading && <ActivityIndicator color="white" /> || <Text style={{ color: 'white', fontSize: 20 }}>
                                Create account
                            </Text>}
                        </TouchableOpacity>
                        <Text style={{ marginTop: 10, color: '#0066ff' }} onPress={e => navigation.navigate('home')}>Already have acocunt ? <Text style={{ color: '#0066ff' }}>Login</Text></Text>
                    </View>
                </View>
            </View>
        </>
    )
}