import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './Home';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Sign } from './sign_up';
import { Land } from './landScreen';
import { Khademni } from './khademni-main';
import { styles } from './style';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='find' component={Khademni}
          options={{
            headerShown: false,
          }} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

