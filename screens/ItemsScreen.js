import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

// Pantalla donde se muestran todas las tareas
export default function ItemsScreen({ navigation, items }) {
  return (
    <View style={styles.container}>

     //titulo de pagina
      <View style={styles.header}>
        <Text style={styles.title}>Listado de tareas</Text>

        <Pressable
          style={styles.addButton}
          onPress={() => navigation.navigate("Agregar")}
        >
          <Text style={styles.addButtonText}>Nuevo</Text>
        </Pressable>
      </View>

     
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}

        // Recorre cada tarea y la muestra en una tarjeta
        renderItem={({ item }) => (
          <Pressable
            style={styles.card}

            // Al tocar la tarjeta abre el detalle
            onPress={() =>
              navigation.navigate("Detalle", {
                item: item,
              })
            }
          >
            <Text style={styles.cardTitle}>
              {item.title}
            </Text>

            <Text style={styles.cardText}>
              {item.description}
            </Text>
          </Pressable>
        )}
      />

    </View>
  );
}

// Seccion para darle estilo a los botones y etiquetas como tamaño, color, etc.
const styles = StyleSheet.create({

  // Contenedor principal
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: "#f5f7fb",
  },

 
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },


  addButton: {
    backgroundColor: "#16a34a",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },

  
  cardText: {
    color: "#555",
  },

});