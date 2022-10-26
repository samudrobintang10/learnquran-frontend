import { Text, View, StyleSheet, Pressable } from "react-native";
import Color from "../../utilities/Color";

export default function Button(props) {
  const { onPress, title, secondary } = props;
  let bgColor = Color.solidGreen;
  let textColor = Color.white;
  if (secondary) {
    bgColor = Color.white;
    textColor = Color.solidGreen;
  }
  return (
    <Pressable style={styles.button(bgColor)} onPress={onPress}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (bgColor) => ({
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: bgColor,
    borderWidth: 2,
    borderColor: Color.solidGreen,
  }),
  text: (textColor) => ({
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "700",
    letterSpacing: 0.25,
    color: textColor,
  }),
});
