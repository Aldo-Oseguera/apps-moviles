import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

// se importan pantallas de la aplicación
import HomeScreen from './screens/HomeScreen';
import ItemsScreen from './screens/ItemsScreen';
import DetailScreen from './screens/DetailScreen';
import AddItemScreen from './screens/AddItemScreen';

// Crea el navegador de pantallas
const Stack = createNativeStackNavigator();

export default function App() {

  // Lista inicial de tareas
  const [items, setItems] = useState([
    {
      id: '1',
      title: 'Tarea 1',
      description: 'Crear app usando npx'
    },
    {
      id: '2',
      title: 'Tarea 2',
      description: 'Correr app usando npx expo start'
    }
  ]);

  // Funcion para agregar una nueva tarea
  const addItem = (title, description) => {

    // Creo el nuevo objeto
    const newItem = {
      id: Date.now().toString(), 
      description
    };

    // Agrego la nueva tarea a la lista
    setItems([...items, newItem]);

  };

  return (

    // Contenedor principal de la navegacion
    <NavigationContainer>

      <Stack.Navigator>

        {/* Pantalla de inicio */}
        <Stack.Screen name="Inicio">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>

        {/* Muestra todas las tareas */}
        <Stack.Screen name="Lista">
          {(props) => <ItemsScreen {...props} items={items} />}
        </Stack.Screen>

        {/* Muestra el detalle de una tarea */}
        <Stack.Screen name="Detalle">
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>

        {/* Formulario para agregar una tarea */}
        <Stack.Screen name="Agregar">
          {(props) => (
            <AddItemScreen
              {...props}
              addItem={addItem}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>

  );