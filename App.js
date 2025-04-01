import { View, StyleSheet, } from "react-native";
import Button from "./components/Button";

export default function Home() {
    return (
      <View style={styles.container}>
        <Button text="Botão 1" />
        <Button text="Botão 2"/>
        <Button text="Botão 3"/>
        <Button text="Botão 4" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });