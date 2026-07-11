import { StyleSheet, Text, View } from "react-native";

// Pantalla que muestra la informacion de las tareas
export default function DetailScreen({ route }) {

  // Manda la tarea enviada desde la pantalla anterior
  const { item } = route.params;

  return (
    <View style={styles.container}>


      <Text style={styles.label}>Título</Text>

  
      <Text style={styles.title}>{item.title}</Text>

     
      <Text style={styles.label}>Descripción</Text>

    
      <Text style={styles.description}>{item.description}</Text>

    </View>
  );

}

// Da las instrucciones de estilo en las etiquetas
const styles = StyleSheet.create({

  
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f7fb',
  },

 
  label: {
    fontWeight: 'bold',
    color: '#666',
    marginTop: 12,
    marginBottom: 4,
  },

 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

 
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },

});