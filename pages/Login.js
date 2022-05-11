import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text, Input } from '@rneui/themed';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { FontAwesome } from "@expo/vector-icons";

import mainStyles  from "../style/MainStyle";

export default function Login({ navigation }) {
  const [ email, setEmail ] = useState(null);
  const [ passowrd, setPassoword ] = useState(null);

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    });
  }

  return (
    <SafeAreaProvider>
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
          onChangeText={ value => setPassoword(value) }
          secureTextEntry={true}/>
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
      </View>
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
  }
});
