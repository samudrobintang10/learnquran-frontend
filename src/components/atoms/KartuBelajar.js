import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import Color from "../../utilities/Color";
import QuranLogo from "../../../assets/quran-2.png";

export default function KartuBelajar(props) {
  const{
    onPress,
    kelas,
  } = props;
  return (
    <View style={styles.kartuBelajar}>
      <Pressable onPress={onPress} style={styles.ctaDetailKelas}>
        <Image source={QuranLogo}  />
      <Text style={styles.textTitleClass}>{kelas}</Text>
      </Pressable>
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
    alignItems: "center",
  },
  textTitleClass: {
    fontSize: 14,
    fontWeight: "600",
    color: Color.solidGreen,
    textAlign: "center"
  },
  ctaDetailKelas: {
    justifyContent: "center",
    alignItems: "center"
  }
});
