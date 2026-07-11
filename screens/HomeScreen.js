import { Pressable, StyleSheet, Text, View } from "react-native";

// Pantalla principal de la aplicacion
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      // Muestra el titulo principal de la app
      <Text style={styles.title}>
        App del curso
      </Text>

      // segundo texto 
      <Text style={styles.subtitle}>
        Sesión 2: navegación y datos locales
      </Text>

      // Boton "ver listado"
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Lista")}
      >
        <Text style={styles.buttonText}>
          Ver listado
        </Text>
      </Pressable>

      // boton para agregar elemento
      <Pressable
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Agregar")}
      >
        <Text style={styles.secondaryButtonText}>
          Agregar elemento
        </Text>
      </Pressable>

    </View>
  );
}

// esta parte sirve para darle estilo a las etiquetas y los botones 
const styles = StyleSheet.create({


  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#f5f7fb",
  },

  
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },

 
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: "#555",
    textAlign: "center",
  },

 
  button: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#2563eb",
    padding: 14,
    borderRadius: 8,
  },

  secondaryButtonText: {
    color: "#2563eb",
    textAlign: "center",
    fontWeight: "bold",
  },

});