import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import axios from 'axios';

import Login from './pages/Login';
import Principal from './pages/Principal';
import Cadastro from './pages/Cadastro';
import CadastroProduto from './pages/CadastroProduto';
import CadastroServico from './pages/CadastroServico';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from './util/Config';

const Stack = createNativeStackNavigator();

const defineInterceptor = () => {
  axios.interceptors.response.use(response => {
    return response;
  }, err => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (err.response.status == 401 && err.config && !err.config._retry) {
        originalReq._retry = true;
        AsyncStorage.getItem("TOKEN").then((token) => {
          let res = axios.put(`${Config.API_URL}token/refresh`, {oldToken: token})
          .then((res) => {
            AsyncStorage.setItem("TOKEN", res.data.access_token);
            originalReq.headers["Authorization"] = `Bearer ${res.data.access_token}`;
            return axios(originalReq);
          });
          resolve(res);
        });
      } else {
        reject(err);
      }
    })
  })
}

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
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro}/>
      <Stack.Screen 
        name="CadastroProduto" 
        component={CadastroProduto}/>
      <Stack.Screen 
        name="CadastroServico" 
        component={CadastroServico}/>
    </Stack.Navigator>
  );
}


export default function App() {
  defineInterceptor();
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
