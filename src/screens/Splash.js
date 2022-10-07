import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/atoms/Button";
import Color from "../utilities/Color";

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000)
  }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.titleSplash}>BelajarQuran</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
    justifyContent: "center",
  },
  titleSplash: {
    fontSize: 32,
    fontWeight: "600",
    color: Color.solidGreen
  },
});
