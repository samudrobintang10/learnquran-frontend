import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import Color from "../../utilities/Color";

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType
}) => {
  const [border, setBorder] = useState(Color.lightGray);
  const onFocusForm = () => {
    setBorder(Color.solidGreen);
  };
  const onBlurForm = () => {
    setBorder(Color.lightGray);
  };
  return (
    <View>
      <TextInput
        style={styles.input(border)}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : 'default'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 6,
    padding: 12,
  }),
});
