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

  //datos de inicio 
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

  //crear una nueva tarea
  const addItem = (title, description) => {

    const newItem = {
      id: Date.now().toString(), 
      description
    };

    setItems([...items, newItem]);

  };

  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Inicio">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Lista">
          {(props) => <ItemsScreen {...props} items={items} />}
        </Stack.Screen>
        <Stack.Screen name="Detalle">
          {(props) => <DetailScreen {...props} />}
        </Stack.Screen>
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
