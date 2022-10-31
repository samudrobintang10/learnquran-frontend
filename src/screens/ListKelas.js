import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Kartu from "../components/atoms/Kartu";
import Color from "../utilities/Color";

export default function ListKelas({ navigation }) {
  return (
    <View style={styles.container}>
      <Gap height={20} />
      <View style={styles.firstrow}>
        <Text style={styles.baseText}>
          LIST KELAS
        </Text>
      </View>
      <Gap height={20} />
      <ScrollView style={styles.content}>
        <Kartu></Kartu>
        <Button title={"MASUK"} onPress={() => navigation.navigate('LandingPage')} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  baseText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff"
  },
  firstrow: {
    flex: 0.125,
    backgroundColor: Color.solidGreen,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});
