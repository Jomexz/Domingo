// src/screens/PantallaPerfil.tsx

import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const PantallaPerfil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Apellidos" />
      <TextInput style={styles.input} placeholder="Teléfono" />
      <TextInput style={styles.input} placeholder="Correo electrónico" />

      <Button title="Actualizar Perfil" onPress={() => alert('Perfil actualizado')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    borderColor: '#ddd',
  },
});

export default PantallaPerfil;
