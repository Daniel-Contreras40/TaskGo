import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de TaskGo</Text>

      <Text style={styles.text}>
        TaskGo es una aplicación móvil desarrollada con React Native y Expo.
      </Text>

      <Text style={styles.text}>
        Permite registrar, visualizar y administrar tareas de manera sencilla.
      </Text>

      <Text style={styles.text}>Proyecto Integrador</Text>

      <Text style={styles.text}>Desarrollo de Apps Móviles I</Text>

      <Text style={styles.footer}>Desarrollado por:</Text>

      <Text style={styles.name}>Luis Daniel Bobadilla Contreras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 25,
    textAlign: "center",
  },

  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 12,
  },

  footer: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    color: "#2563EB",
    fontWeight: "bold",
    marginTop: 8,
  },
});
