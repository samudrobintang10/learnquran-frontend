import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Input from "../components/atoms/Input";
import Link from "../components/atoms/Link";
import Color from "../utilities/Color";
import InputSelect from "../components/atoms/InputSelect";

const genderOptions = [
  {
    label: "Ikhwan",
    value: "ikhwan",
  },
  { label: "Akhwan", value: "Akhwan" },
];

const roleOptions = [
  {
    label: "Pembelajar",
    value: "pembelajar",
  },
  { label: "Pengajar", value: "pengajar" },
];

export default function Register({ navigation }) {
  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const setSelectedGender = (genderValue) => {
    setGender(genderValue);
  };
  const setSelectedRole = (roleValue) => {
    setRole(roleValue);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Gap height={40} />
        <Text style={styles.baseText}>
          Halo, Selamat datang di
          <Text style={styles.innerText}> Belajar Qur’an</Text>
        </Text>
        <Gap height={7} />
        <Text style={styles.descriptionText}>
          Masukan dari diri kamu untuk mendaftarkan diri ke dalam sistem
        </Text>
        <Gap height={40} />
        <Input placeholder={"Nama Lengkap"} />
        <Gap height={20} />
        <Input placeholder={"Email"} keyboardType={"email-address"} />
        <Gap height={20} />
        <Input placeholder={"Password"} secureTextEntry />
        <Gap height={20} />
        <Input placeholder={"Konfirmasi Password"} secureTextEntry />
        <Gap height={20} />
        <InputSelect
          items={genderOptions}
          onValueChange={setSelectedGender}
          selectedValue={gender}
          placeholder="Pilih Jenis Kelamin..."
        />
        <Gap height={20} />
        <Input placeholder={"(+62) Nomor Telepon"} keyboardType={"numeric"} />
        <Gap height={20} />
        <InputSelect
          items={roleOptions}
          onValueChange={setSelectedRole}
          selectedValue={role}
          placeholder="Pilih Role..."
        />
        <Gap height={36} />
        <Button title={"MARI BELAJAR"} />
        <Gap height={32} />
        <View style={styles.borderLine} />
        <Gap height={36} />
        <Text style={styles.notLogin}>Sudah punya akun?</Text>
        <Gap height={7} />
        <Link
          title={"Login disini"}
          align={"center"}
          size={15}
          onPress={() => navigation.goBack()}
        />
        <Gap height={80} />
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
  notLogin: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  borderLine: {
    borderBottomColor: Color.lightGray,
    borderBottomWidth: 0.5,
  },
});
