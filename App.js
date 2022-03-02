import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import data from "./assets/test_data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List Of Data</Text>
      <FlatList
        // horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.gender == "Male" ? (
            <Text style={styles.itemM}>
              {item.first_name} - Gender {item.gender}
            </Text>
          ) : (
            <Text style={styles.itemF}>
              {item.first_name} - Gender {item.gender}
            </Text>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
  },
  itemM: {
    backgroundColor: "rgb(12, 12, 128)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#ffffff",
  },
  itemF: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  text: {
    fontSize: 20,
    paddingBottom: 24,
    paddingLeft: 15,
    paddingTop: 20,
  },
});
