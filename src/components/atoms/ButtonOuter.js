import { Text, View, StyleSheet, Pressable } from "react-native";
import Color from "../../utilities/Color";

export default function ButtonOuter(props) {
  const { onPress, title, secondary } = props;
  let bgColor = Color.solidGreen;
  let textColor = Color.white;
  if (secondary) {
    bgColor = Color.white;
    textColor = Color.solidGreen;
  }
  return (
    <Pressable style={styles.buttonRed} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    buttonRed: {
      backgroundColor: "white", 
      borderRadius: 5, 
      color: Color.solidGreen, 
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 5,
      paddingTop: 5,
      borderColor: Color.solidGreen,
      borderWidth: 2,

    },
    text: {
        fontWeight: '500',
        color : Color.solidGreen
    }
  });
  
