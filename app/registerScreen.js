import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Aqui você pode implementar a lógica de registro
    // Verificar os campos fornecidos, fazer chamadas à API para criar a conta, etc.
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <FontAwesome name="user-circle-o" size={60} color="#333" />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome de Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Criar Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.socialButton} onPress={handleRegister}>
          <Text style={styles.socialButtonText}>Cadastrar</Text>
        </TouchableOpacity>
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
    marginVertical: 70,
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

export default RegisterScreen;
