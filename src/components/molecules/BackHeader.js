import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import Gap from "../atoms/Gap";
import Color from "../../utilities/Color";
import BackIcon from "../../../assets/BackIcon.png";

const BackHeader = ({ onPress }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContents}>
        <Pressable onPress={onPress} style={styles.iconBack}>
          <Image source={BackIcon} />
        </Pressable>
        <Text style={styles.headerText}>Detail Soal 1</Text>
      </View>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.solidGreen,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 16,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
  headerContents: {
    justifyContent: "center",
  },
  iconBack: {
    position: "absolute",
    height: 32,
    width: 32,
    zIndex: 3,
    justifyContent: "center",
    backgroundColor: Color.solidGreen
  },
});
