import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  nombre: string;
  onDelete: () => void;
};

export default function TaskCard({ nombre, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.taskText}>{nombre}</Text>

      <Pressable style={styles.button} onPress={onDelete}>
        <Text style={styles.buttonText}>Eliminar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3,
  },

  taskText: {
    fontSize: 18,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#DC2626",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
