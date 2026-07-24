import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import TaskCard from "@/components/TaskCard";

export default function TasksScreen() {
  const [nuevaTarea, setNuevaTarea] = useState("");

  const [tareas, setTareas] = useState([
    { id: "1", nombre: "Estudiar React Native" },
    { id: "2", nombre: "Realizar proyecto integrador" },
    { id: "3", nombre: "Subir avances a GitHub" },
  ]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    setTareas([
      ...tareas,
      {
        id: Date.now().toString(),
        nombre: nuevaTarea,
      },
    ]);

    setNuevaTarea("");
  };

  const eliminarTarea = (id: string) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Tareas</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe una nueva tarea"
        value={nuevaTarea}
        onChangeText={setNuevaTarea}
      />

      <Button title="Agregar tarea" onPress={agregarTarea} />

      <FlatList
        style={{ marginTop: 20 }}
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            nombre={item.nombre}
            onDelete={() => eliminarTarea(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2563EB",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
});
