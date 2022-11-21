import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Input from "../components/atoms/Input";
import Link from "../components/atoms/Link";
import Color from "../utilities/Color";
import { saveItem } from "../utilities/secureStorage";
import { useDispatch } from "react-redux";
import { login } from "../services/auth.service";
import UserAPI from "../services/UserAPI";
import { Alert } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async () => {
    dispatch({ type: "SET_LOADING", value: true });
    login(email, password)
      .then(async (userCredential) => {
        const userToken = userCredential.data.results.data.jwt;
        saveItem("accessToken", userToken);
        try {
          const { data: response } = await UserAPI.getUserDetail();
          saveItem("userData", response?.results?.data);
          navigation.replace("LandingPage");
          dispatch({ type: "SET_LOADING", value: false });
        } catch (error) {
          dispatch({ type: "SET_LOADING", value: false });
          Alert.alert(error.message);
        }
      })
      .catch((error) => {
        dispatch({ type: "SET_LOADING", value: false });
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Gap height={40} />
        <Text style={styles.baseText}>
          Selamat datang kembali,
          <Text style={styles.innerText}> harap login untuk melanjutkan</Text>
        </Text>
        <Gap height={7} />
        <Text style={styles.descriptionText}>
          Masukan akun yang kamu punya untuk terauntentikasi ke dalam sistem
        </Text>
        <Gap height={40} />
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
        <Gap height={12} />
        <Link title={"Lupa Password?"} align={"right"} size={15} />
        <Gap height={36} />
        <Button title={"MASUK"} onPress={() => handleSignIn()} />
        <Gap height={12} />
        <Button
          title={"MASUK (DEBUG)"}
          onPress={() => navigation.navigate("LandingPage")}
        />
        <Gap height={32} />
        <View style={styles.borderLine} />
        <Gap height={36} />
        <Text style={styles.notRegister}>Belum Punya akun?</Text>
        <Gap height={7} />
        <Link
          title={"Daftar Sekarang"}
          align={"center"}
          size={15}
          onPress={() => navigation.replace("Register")}
        />
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
    textAlign: "center",
  },
  borderLine: {
    borderBottomColor: Color.lightGray,
    borderBottomWidth: 0.5,
  },
});
