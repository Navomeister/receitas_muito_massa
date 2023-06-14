import React from "react";
import { View, FlatList, Text } from "react-native";

function ListaIngredientes({ ingredientes }) {
  return (
    <FlatList style={{ flex: 1 }}
      data={ingredientes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 5, }}>
          <Text>{item.nome}: {item.quantidade}</Text>
        </View>
      )}
    />
  );
}

export default ListaIngredientes;