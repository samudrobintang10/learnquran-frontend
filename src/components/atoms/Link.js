import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Color from "../../utilities/Color";

const Link = ({ title, size, align, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    color: Color.solidGreen,
    fontSize: size,
    textAlign: align,
  }),
});
