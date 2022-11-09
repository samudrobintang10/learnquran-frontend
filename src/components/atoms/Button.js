import { Text, View, StyleSheet, Pressable } from "react-native";
import Color from "../../utilities/Color";

export default function Button(props) {
  const { onPress, title, secondary, tertiary, fouthdary, fivedary } = props;
  let bgColor = Color.solidGreen;
  let textColor = Color.white;
  let borderColor = Color.solidGreen;
  if (secondary) {
    bgColor = Color.white;
    textColor = Color.solidGreen;
  }
  if (tertiary) {
    bgColor = Color.lightGray;
    textColor = Color.white;
    borderColor = Color.lightGray
  }
  if (fouthdary) {
    bgColor = Color.red,
    borderColor = Color.red
  }
  if (fivedary) {
    bgColor = Color.lightBlue,
    borderColor = Color.lightBlue
  }
  return (
    <Pressable style={styles.button(bgColor, borderColor)} onPress={onPress}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (bgColor, borderColor) => ({
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: bgColor,
    borderWidth: 2,
    borderColor: borderColor,
    zIndex: 3,
  }),
  text: (textColor) => ({
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "700",
    letterSpacing: 0.25,
    color: textColor,
  }),
});
