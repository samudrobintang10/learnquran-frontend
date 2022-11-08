import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import Gap from "../components/atoms/Gap";
import Color from "../utilities/Color";
import Button from "../components/atoms/Button";
import { auth } from "../config/firebase-config";
import { deleteItem, getValueFor } from "../utilities/secureStorage";
import Header from "../components/molecules/Header";
import KartuBelajar from "../components/atoms/KartuBelajar";

export default function LandingPage({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        deleteItem("accessToken");
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  const getAccessToken = async () => {
    const accessToken = await getValueFor("accessToken");
    console.log(accessToken);
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => navigation.navigate("DetailPembelajar")} />
      <ScrollView style={styles.content}>
        <Gap height={20} />
        <Text style={styles.baseText}>
          Assalamu’alaikum Bintang,
          <Text style={styles.innerText}> Selamat Datang Kembali</Text>
        </Text>
        <Gap height={20} />
        <Text style={styles.baseText}>Mulai Belajar </Text>
        <Gap height={14} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <KartuBelajar onPress={() => navigation.navigate("DetailKelasPembelajar")} kelas={'Test Kelas'}/>
          <Gap width={20} />
          <KartuBelajar />
          <Gap width={20} />
          <KartuBelajar />
        </ScrollView>
        <Gap height={40} />
        <Button
          title={"Cari Kelas"}
          onPress={() => navigation.navigate("ListKelas")}
        />
        <Gap height={10} />
        <Button
          title={"Ubah Pembelajar"}
          onPress={() => navigation.navigate("UbahPembelajar")}
        />
        <Gap height={10} />
        <Button
          title={"Kelas Diajar"}
          onPress={() => navigation.navigate("ListKelasPengajar")}
        />
        <Gap height={40} />
        <Button
          title={"CHECK TOKEN"}
          onPress={() => getAccessToken()}
          secondary
        />
        <Button
          title={"TEMPORARY LOGOUT"}
          onPress={() => handleSignOut()}
          secondary
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
    flex: 1,
  },
  baseText: {
    fontSize: 28,
    fontWeight: "600",
  },
  innerText: {
    color: Color.solidGreen,
  },
  footer: {
    height: 100,
  },
});
