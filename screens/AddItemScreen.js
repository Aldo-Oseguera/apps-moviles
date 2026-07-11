import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

// Pantalla para agregar una nueva tarea
export default function AddItemScreen({ navigation, addItem }) {

  // variables que guardan lo que escribe el usuario
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // funcion para guardar una tarea 
  function handleSave() {
    if (title.trim() === '' || description.trim() === '') {
      return;
    }
    addItem(title, description);
    navigation.navigate('Items');
  }

  return (
    <View style={styles.container}>

  
      <Text style={styles.label}>Título</Text>

      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Revisar proyecto"
        value={title}
        onChangeText={setTitle}
      />

    
      <Text style={styles.label}>Descripción</Text>

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe el elemento"
        value={description}
        onChangeText={setDescription}
        multiline
      />

     
      <Pressable
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          Guardar
        </Text>
      </Pressable>

    </View>
  );
}

// Estilos para bonotes y etiquetas
const styles = StyleSheet.create({


  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
  },

  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
  },


  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

 
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },


  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    borderRadius: 8,
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  }

});