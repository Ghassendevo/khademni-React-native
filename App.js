import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Home } from './Home';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ant from 'react-native-vector-icons/AntDesign'
import { Sign } from './sign_up';
import { Land } from './landScreen';
import { Khademni } from './khademni-main';
import { styles } from './style';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { post } from './addPostRedux';
import { Post } from './postComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validate } from './validatePostRedux';
import { loggedin } from './anotherRedux';
import { postvalue } from './PostvalueRedux';
import { ispostclick } from './ispostclickredux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { islogin } from './loginRedux';
import { jobsredux } from './jobsRedux';
import axios from 'axios';
import { userSession } from './userSession';
export default function App() {

  const Stack = createNativeStackNavigator();
  const allReducers = combineReducers({
    post: post,
    loggedin: loggedin,
    validate: validate,
    postvalue: postvalue,
    ispostclick: ispostclick,
    islogin: islogin,
    jobsredux: jobsredux,
    userSession: userSession,
  })
  let store = createStore(allReducers);

  const [isclick, setisClick] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name='land' component={Land}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name='home' component={Home}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name='sign' component={Sign}
            options={{
              headerShown: false,
            }} />
          <Stack.Screen name='find' component={Khademni}
            options={{
              headerShown: false,
            }} />
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name='post' component={Post}
              options={({ navigation }) => ({
                headerShown: true,
                headerTitle: props => {
                  return (
                    <Text style={{ fontSize: 17, fontWeight: '700', textAlignVertical: 'center', color: 'black' }}>Create Job</Text>
                  )
                },
                headerLeft: () => {
                  return (
                    <Ant name='close' size={25} onPress={e => navigation.goBack()} />
                  )
                },
                headerRight: () => {
                  const navigation = useNavigation();
                  const isValidate = useSelector(state => state.validate)
                  const postData = useSelector(state => state.postvalue)
                  const dispatch = useDispatch()
                  const usersSesison = useSelector(state => state.aciton);
                  const [isLoading, setisLoading] = useState(false)
                  const postonclick = (e) => {
                    return {
                      type: 'ISPOSTCLICK',
                      payload: e,
                    }
                  }
                  const addposttoredux = (e)=>{
                    return {
                      type:'ADDJOB',
                      payload:e,
                    }
                  }
                  const userSessionvalue = useSelector(state => state.userSession)
                  const addPost = () => {
                    if (isValidate) {
                      setisLoading(true)
                      const data = { ...postData, ...userSessionvalue }
                      dispatch(postonclick(true))
                      //addpost to server
                      axios.post(`http://172.20.10.12:3000/addPost`, {
                        data: data,
                      }).then(succ => {
                        dispatch(postonclick(true))
                        if (succ.data) {
                          dispatch(addposttoredux(data))
                          navigation.navigate('find', { id: data.id, username: data.username, password: data.password,job:data })
                        }
                      }).catch(err => {
                        dispatch(postonclick(true))
                        if (err) throw err;
                      })
                    } else {
                      dispatch(postonclick(false))
                    }

                  }
                  return (
                    <TouchableOpacity style={{ backgroundColor: isValidate ? '#0066ff' : '#eeee', height: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: 60 }} onPress={addPost}>
                      {
                        isLoading == true ? (<ActivityIndicator color='white' />) : (<Text style={{ fontSize: 17, color: 'white' }} >Post</Text>)
                      }
                    </TouchableOpacity>
                  )
                },

              })} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

