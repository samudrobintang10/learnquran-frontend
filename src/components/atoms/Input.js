import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import Color from "../../utilities/Color";

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  keyboardType,
  multiline
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
        style={styles.input(border, multiline)}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        keyboardType={keyboardType ? keyboardType : "default"}
        value={value}
        editable={disable ? false : true}
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border, multiline) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 6,
    padding: 12,
    textAlignVertical: multiline ? "top": "center",
  }),
});
