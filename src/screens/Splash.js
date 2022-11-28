import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AuthHeader from "../services/auth.header";
import Color from "../utilities/Color";
import { getValueFor } from "../utilities/secureStorage";

export default function Splash({ navigation }) {
  useEffect(() => {
    async function isLogged() {
      setTimeout(async () => {
        const userDataStorage = await getValueFor("userData");
        const isLogged = await getValueFor("accessToken");
        if (isLogged) {
          navigation.replace("LandingPage", { roleUser: userDataStorage.role });
        } else {
          navigation.replace("Login");
        }
      }, 3000);
    }
    isLogged();
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
