import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navigation />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
