import { Text, View, StyleSheet, Pressable } from "react-native";
import Color from "../../utilities/Color";

export default function ButtonSmall(props) {
  const { onPress, title, secondary, danger, teritary } = props;
  let bgColor = Color.lightBlue;
  let textColor = Color.white;
  let border = Color.lightBlue;
  if (secondary) {
    bgColor = Color.white;
    textColor = Color.lightBlue;
    border = Color.lightBlue;
  }
  if (danger) {
    bgColor = 'red';
    textColor = Color.white;
    border = 'red';
  }
  if (teritary) {
    bgColor = 'grey';
    textColor = Color.white;
    border = 'grey';
  }
  return (
    <Pressable style={styles.button(bgColor,border)} onPress={onPress}>
      <Text style={styles.text(textColor)}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: (bgColor,border) => ({
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor,
    borderRadius: 5,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 2,
    borderColor: border,

  }),
  text: (textColor) => ({
    fontWeight: '500',
    color: textColor
  })
});

