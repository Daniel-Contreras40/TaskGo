import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskGo</Text>

      <Text style={styles.subtitle}>Gestor de Tareas Móvil</Text>

      <Text style={styles.description}>Bienvenido a TaskGo.</Text>

      <Text style={styles.description}>
        Organiza tus tareas de manera rápida y sencilla.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
  },

  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
});
