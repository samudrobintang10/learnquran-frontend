import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Input from "../components/atoms/Input";
import Link from "../components/atoms/Link";
import Color from "../utilities/Color";

export default function Login() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Gap height={100} />
        <Text style={styles.baseText}>
          Selamat datang kembali,
          <Text style={styles.innerText}> harap login untuk melanjutkan</Text>
        </Text>
        <Gap height={7} />
        <Text style={styles.descriptionText}>
          Masukan akun yang kamu punya untuk terauntentikasi ke dalam sistem
        </Text>
        <Gap height={40} />
        <Input placeholder={"Email"} />
        <Gap height={20} />
        <Input placeholder={"Password"} secureTextEntry/>
        <Gap height={12} />
        <Link title={"Lupa Password?"} align={"right"} size={15} />
        <Gap height={36} />
        <Button title={"MASUK"} />
        <Gap height={32} />
        <View style={styles.borderLine}/>
        <Gap height={36} />
        <Text style={styles.notRegister}>
          Belum Punya akun?
        </Text>
        <Gap height={7} />
        <Link title={"Daftar Sekarang"} align={"center"} size={15} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  content: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  baseText: {
    fontSize: 32,
    fontWeight: "600",
  },
  innerText: {
    color: Color.solidGreen,
  },
  descriptionText: {
    color: Color.lightGray,
    fontSize: 12,
  },
  notRegister: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center"
  },
  borderLine: {
    borderBottomColor: Color.lightGray,
    borderBottomWidth: 0.5
  }
});
