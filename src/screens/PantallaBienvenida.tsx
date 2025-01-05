// src/screens/PantallaBienvenida.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  // Para el ícono del usuario
import { useNavigation } from '@react-navigation/native';  // Hook para navegación
import { NativeStackNavigationProp } from '@react-navigation/native-stack';  // Navegación de stack nativa

// Simulamos una lista de servicios
const SERVICIOS = [
  { id: '1', nombre: 'Reparación de Laptop' },
  { id: '2', nombre: 'Reparación de Móvil' },
  { id: '3', nombre: 'Reparación de PC de escritorio' },
  // Más servicios aquí...
];

// Definimos el tipo de las pantallas del Stack Navigator
type RootStackParamList = {
  Servicios: undefined;  // Pantalla principal
  Login: undefined;  // Pantalla de Login
};

type PantallaBienvenidaNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Servicios'
>;

const PantallaBienvenida = () => {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const serviciosFiltrados = SERVICIOS.filter(servicio =>
    servicio.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  const navigation = useNavigation<PantallaBienvenidaNavigationProp>();  // Usamos el tipo de navegación correctamente

  return (
    <View style={styles.container}>
      {/* Título de la App */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Domingo</Text>
      </View>

      {/* Ícono de usuario que permite ir al login (eliminado porque ya está en el drawer)*/}

      {/* Buscador */}
      <TextInput
        style={styles.searchBar}
        placeholder="Busca un servicio..."
        value={textoBusqueda}
        onChangeText={setTextoBusqueda}
      />

      {/* Lista de servicios filtrados */}
      <FlatList
        data={serviciosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Text style={styles.serviceText}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignSelf: 'flex-end',  // Colocamos el ícono en la esquina superior derecha
    paddingRight: 10,
    marginBottom: 20,
  },
  searchBar: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  serviceItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  serviceText: {
    fontSize: 16,
  }
});

export default PantallaBienvenida;
