import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Color from "../../utilities/Color";

const InputSelect = ({ placeholder, selectedValue, items, onValueChange }) => {
  const [border, setBorder] = useState(Color.lightGray);

  const selectingValue = (itemValue) => {
    onValueChange(itemValue)
  };

  return (
    <View style={styles.inputSelect(border)}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => selectingValue(itemValue)}
      >
        <Picker.Item
          value=""
          label={placeholder}
          style={styles.placeholder}
        />
        {items.map((item) => (
          <Picker.Item label={item.label} value={item.value} key={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default InputSelect;

const styles = StyleSheet.create({
  inputSelect: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 6,
  }),
  placeholder: {
    color: Color.lightGray,
  },
});
