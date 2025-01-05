import 'react-native-gesture-handler';  // Asegúrate de importar esto en la parte superior
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavegacionDrawer from './src/navigation/NavegacionDrawer'; 

export default function App() {
  return (
    <NavigationContainer>
      <NavegacionDrawer />
    </NavigationContainer>
  );
}
