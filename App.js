import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import Login from './pages/Login';
import Principal from './pages/Principal';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login}
        options={{headerShown: false}}/>
      <Stack.Screen 
        name="Principal" 
        component={Principal}
        options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}


export default function App() {

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
