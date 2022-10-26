import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../utilities/Color";
import { auth } from "../config/firebase-config";

export default function Splash({ navigation }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace("LandingPage");
        } else {
          navigation.replace("Login");
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);

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
    color: Color.solidGreen,
  },
});
