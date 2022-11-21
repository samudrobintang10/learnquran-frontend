import { Text, View, StyleSheet, Pressable } from "react-native";
import Color from "../../utilities/Color";

export default function ButtonOuter(props) {
  const { onPress, title, backgroundColor, text } = props;
  let bgColor = backgroundColor;
  let textColor = text;
  return (
    <Pressable style={styles.buttonRed(bgColor)} onPress={onPress}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonRed: (bgColor) => ({
    backgroundColor: "white",
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderColor: bgColor,
    borderWidth: 2,

  }),
  text: (textColor) => ({
    fontWeight: '500',
    color: textColor
  })
});

