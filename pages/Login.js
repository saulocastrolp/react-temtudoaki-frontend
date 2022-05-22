import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Input } from '@rneui/themed';
import { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";

import mainStyles  from "../style/MainStyle";
import { UsuarioService } from '../service/UsuarioService';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);
  const [ isLoadingToken, setLoadingToken ] = useState(true);

  const entrar = () => {

      setLoading(true)
      
      let data = {
        username: email,
        password: password
      }

      let usuarioService = new UsuarioService;
      usuarioService.login(data)
      .then((response) => {
        setLoading(false)
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        });       
      })
      .catch((error) => {
        setLoading(false)
        Alert.alert("Erro", "Usuário Inválido!")
      });
  }

  const logarComToken = (token) => {

    setLoadingToken(true)
    
    let data = {
      token: token,
    }

    let usuarioService = new UsuarioService;
    usuarioService.loginComToken(data)
    .then((response) => {
      setLoadingToken(false)
      navigation.reset({
          index: 0,
          routes: [{name: "Principal"}]
      });       
    })
    .catch((error) => {
      setLoadingToken(false)
    });
}

  const cadastrar = () => {
    navigation.navigate("Cadastro");
  }

  useEffect(() => {
    AsyncStorage.getItem("TOKEN").then((token) => {
      logarComToken(token);
    });
  }, [])

  return (
    <SafeAreaProvider>
      { isLoadingToken &&
        <Text>Só um minutinho...</Text>
      }

      { !isLoadingToken && 
        <View style={mainStyles.container}>
          <Text 
            h3
            style={styles.tituloLogin}> Entre no TemTudoAki</Text>
          <Input 
            placeholder="email"
            keyboardType="email-address"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={ value => setEmail(value) }/>
          <Input 
            placeholder="Sua senha"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={ value => setPassword(value) }
            secureTextEntry={true}/>

            { isLoading &&
              <ActivityIndicator/>
            }

            { !isLoading && 
              <TouchableOpacity 
                style={styles.buttonLogin}
                onPress={()=> entrar() }>
                  <FontAwesome 
                    style={styles.buttonLoginIcon}
                    name="sign-in" 
                    size={23} 
                    color="white" />
                <Text style={styles.buttonLoginText}>
                  Login
                </Text>
              </TouchableOpacity>
            }

            <TouchableOpacity 
              style={styles.buttonCadastrar}
              onPress={()=> cadastrar() }>
                <FontAwesome 
                  style={styles.buttonCadastrarIcon}
                  name="user" 
                  size={23} 
                  color="white" />
              <Text style={styles.buttonCadastrarText}>
                Cadastrar
              </Text>
            </TouchableOpacity>
        </View>
      }
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tituloLogin: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0782ea",
  },
  buttonLogin: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f84e5",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    width: "33%",
  },
  buttonLoginText: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonLoginIcon: {
    marginRight: 10,
  },
  buttonCadastrar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f84e5",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    width: "33%",
  },
  buttonCadastrarText: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonCadastrarIcon: {
    marginRight: 10,
  }
});
