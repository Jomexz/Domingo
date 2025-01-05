// src/navigation/NavegacionDrawer.tsx

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import PantallaBienvenida from '../screens/PantallaBienvenida';
import PantallaLogin from '../screens/PantallaLogin';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer'; // Importamos el tipo adecuado para el Drawer

// Define las pantallas que estarán disponibles en el Drawer
type RootDrawerParamList = {
  Servicios: undefined;  // No esperamos argumentos en la pantalla de servicios
  Login: undefined;  // Tampoco esperamos argumentos en la pantalla de login
};

// Tipamos el hook useNavigation para que sea compatible con las pantallas del Drawer
type NavegacionDrawerProp = DrawerNavigationProp<RootDrawerParamList, 'Servicios'>;

const Drawer = createDrawerNavigator<RootDrawerParamList>();  // Usamos este tipo para tipar el DrawerNavigator

const NavegacionDrawer = () => {
  const navigation = useNavigation<NavegacionDrawerProp>();  // Ahora el tipo está correctamente aplicado

  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}  // Asegúrate de que "Login" es una ruta válida
            style={{ paddingRight: 10 }}
          >
            <Ionicons name="person-circle" size={30} color="black" />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Servicios" component={PantallaBienvenida} />
      <Drawer.Screen name="Login" component={PantallaLogin} />
    </Drawer.Navigator>
  );
};

export default NavegacionDrawer;
