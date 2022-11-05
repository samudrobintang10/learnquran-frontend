import { View, StyleSheet, Text, Image } from "react-native";
import Color from "../../utilities/Color";
import QuranLogo from "../../../assets/quran-2.png";

export default function KartuBelajar({}) {
  return (
    <View style={styles.kartuBelajar}>
      <Image source={QuranLogo} />
      <Text style={styles.textTitleClass}>Kelas Mengaji 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  kartuBelajar: {
    width: 137,
    height: 137,
    borderWidth: 2,
    borderColor: Color.solidGreen,
    borderRadius: 12,
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitleClass: {
    fontSize: 14,
    fontWeight: "600",
    color: Color.solidGreen,
  },
});
