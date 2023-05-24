import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {Link,} from 'expo-router'
import { useRouter } from "expo-router";
const LoginScreen = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    // Aqui você pode implementar a lógica de autenticação
    // Verificar o email e senha fornecidos, fazer chamadas à API, etc.
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleGoogleLogin = () => {
    // Lógica de login com Google
  };

  const handleFacebookLogin = () => {
    // Lógica de login com Facebook
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <FontAwesome name="user-circle-o" size={60} color="#333" />
      </View>
      <View >
        <View>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        <Link href="/registerScreen">Registar</Link>
        <TouchableOpacity style={{marginVertical:70 ,   borderRadius: 4, paddingVertical: 12,  backgroundColor: '#3b5998',}} onPress={() =>{  router.push("/inicio");}}>
          <Text style={styles.socialButtonText}>Entrar</Text>
        </TouchableOpacity>
        </View>
        <View style={{marginTop:50}}>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
          <Text style={styles.socialButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
          <Text style={styles.socialButtonText}>Entrar com Facebook</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical:70,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  socialButton: {
    marginTop: 8,
    paddingVertical: 12,
    borderRadius: 4,
    backgroundColor: '#3b5998',
  },
  socialButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginScreen;
