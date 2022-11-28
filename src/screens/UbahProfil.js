import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Color from "../utilities/Color";
import BackHeader from "../components/molecules/BackHeader";
import Input from "../components/atoms/Input";
import InputSelect from "../components/atoms/InputSelect";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getValueFor, saveItem } from "../utilities/secureStorage";
import UserAPI from "../services/UserAPI";
import { Alert } from "react-native";

const genderOptions = [
  {
    label: "Ikhwan",
    value: 0,
  },
  { label: "Akhwan", value: 1 },
];

export default function UbahProfil({ navigation }) {
  // data will be updated
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

  // implement getDataUser
  const getUserData = async () => {
    const userDataStorage = await getValueFor("userData");
    setFullName(userDataStorage?.name);
    setEmail(userDataStorage?.email_address);
    setPhoneNumber(userDataStorage?.phone_number);
    setGender(userDataStorage?.gender);
    setRole(userDataStorage?.role);
  };

  const dispatch = useDispatch();

  const handleUpdateUser = async () => {
    dispatch({ type: "SET_LOADING", value: true });
    try {
      UserAPI.updateUserDetail(fullName, password, gender, phoneNumber)
        .then(async (response) => {
          const { data: dataResponse } = await UserAPI.getUserDetail();
          saveItem("userData", dataResponse?.results?.data);
          Alert.alert(
            "Akun berhasil diubah",
            "Data akun anda telah berhasil diubah"
          );
          dispatch({ type: "SET_LOADING", value: false });
          navigation.replace("LandingPage", { role: role });
        })
        .catch((error) => {
          dispatch({ type: "SET_LOADING", value: false });
          console.log(error);
          Alert.alert(error.message);
        });
    } catch (error) {
      dispatch({ type: "SET_LOADING", value: false });
      console.log(error);
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <BackHeader onPress={() => navigation.goBack()} judul={"Akun Kamu"} />
      <Gap height={20} />
      <ScrollView style={styles.content}>
        <Input
          placeholder={"Nama Lengkap"}
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        <Gap height={20} />
        <Input
          placeholder={"Email"}
          keyboardType={"email-address"}
          onChangeText={(text) => setEmail(text)}
          value={email}
          disable
        />
        <Gap height={20} />
        <Input
          placeholder={"Password Baru"}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Gap height={20} />
        <Input
          placeholder={"Konfirmasi Password Baru"}
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
          value={phoneNumber}
        />
        <Gap height={36} />
        <Button title={"UBAH"} onPress={() => handleUpdateUser()} />
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
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
  },
  baseText2: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
    paddingLeft: 10,
  },
  firstrow: {
    backgroundColor: Color.solidGreen,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    height: 100,
  },
});
