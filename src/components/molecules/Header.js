import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import Gap from "../atoms/Gap";
import Color from "../../utilities/Color";
import AccountLogo from "../../../assets/account_circle.png";

const Header = ({ onPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>BelajarQuran</Text>
      <Pressable style={styles.account} onPress={onPress}>
        <Text style={styles.accountText}>Hi, Bintang!</Text>
        <Gap width={5} />
        <Image source={AccountLogo} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.solidGreen,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  account: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  accountText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
  },
});
