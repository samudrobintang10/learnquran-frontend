import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Input from "../components/atoms/Input";
import Link from "../components/atoms/Link";
import Color from "../utilities/Color";
import InputSelect from "../components/atoms/InputSelect";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase-config";
import axios from "axios";
import { API_KEY, API_URL } from "@env";
import { saveItem } from "../config/secureStorage";
import { useDispatch } from "react-redux";

const genderOptions = [
  {
    label: "Ikhwan",
    value: 0,
  },
  { label: "Akhwan", value: 1 },
];

const roleOptions = [
  {
    label: "Pembelajar",
    value: 0,
  },
  { label: "Pengajar", value: 1 },
];

export default function Register({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState();
  const [role, setRole] = useState();
  const setSelectedGender = (genderValue) => {
    setGender(genderValue);
  };
  const setSelectedRole = (roleValue) => {
    setRole(roleValue);
  };
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    dispatch({ type: "SET_LOADING", value: true });
    if (password !== passwordConfirmation) {
      alert("Konfirmasi password tidak sama dengan password");
    } else {
      try {
        const response = await axios.post(
          `https://learquran-dev-1-lcbpygkjcq-as.a.run.app/api/v1/user/register?condition=` +
            role,
          {
            email_address: email,
            password: password,
            name: fullName,
            gender: gender,
            phone_number: phoneNumber,
          },
          { headers: { apiKey: API_KEY } }
        );
        if (response.status === 200) {
          alert("Selamat Datang", "Akun anda telah berhasil dibuat");
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              saveItem("accessToken", user.accessToken);
              dispatch({ type: "SET_LOADING", value: false });
              navigation.replace("LandingPage");
            })
            .catch((error) => {
              dispatch({ type: "SET_LOADING", value: false });
              console.log(error);
            });
        }
      } catch (error) {
        dispatch({ type: "SET_LOADING", value: false });
        console.log(error);
      }
    }
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
        <Input
          placeholder={"Nama Lengkap"}
          onChangeText={(text) => setFullName(text)}
        />
        <Gap height={20} />
        <Input
          placeholder={"Email"}
          keyboardType={"email-address"}
          onChangeText={(text) => setEmail(text)}
        />
        <Gap height={20} />
        <Input
          placeholder={"Password"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Gap height={20} />
        <Input
          placeholder={"Konfirmasi Password"}
          secureTextEntry
          onChangeText={(text) => setPasswordConfirmation(text)}
        />
        <Gap height={20} />
        <InputSelect
          items={genderOptions}
          onValueChange={setSelectedGender}
          selectedValue={gender}
          placeholder="Pilih Jenis Kelamin..."
        />
        <Gap height={20} />
        <Input
          placeholder={"(+62) Nomor Telepon"}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <Gap height={20} />
        <InputSelect
          items={roleOptions}
          onValueChange={setSelectedRole}
          selectedValue={role}
          placeholder="Pilih Role..."
        />
        <Gap height={36} />
        <Button title={"MARI BELAJAR"} onPress={() => handleSignUp()} />
        <Gap height={32} />
        <View style={styles.borderLine} />
        <Gap height={36} />
        <Text style={styles.notLogin}>Sudah punya akun?</Text>
        <Gap height={7} />
        <Link
          title={"Login disini"}
          align={"center"}
          size={15}
          onPress={() => navigation.replace("Login")}
        />
        <Gap height={60} />
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
