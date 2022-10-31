import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Gap from "../components/atoms/Gap";
import Color from "../utilities/Color";
import Button from "../components/atoms/Button";
import { auth } from "../config/firebase-config";
import { deleteItem, getValueFor } from "../config/secureStorage";

export default function LandingPage({ navigation }) {
  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       deleteItem("accessToken");
  //       navigation.replace("Login");
  //     })
  //     .catch((error) => alert(error.message));
  // };
  // const getAccessToken = async () => {
  //   const accessToken = await getValueFor("accessToken");
  // };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Gap height={40} />
        <Text style={styles.baseText}>
          {/* Assalamu’alaikum {auth.currentUser.email}, */}
          <Text style={styles.innerText}> Selamat Datang Kembali</Text>
        </Text>
        <Gap height={40} />
        <Button
          title={"DAFTAR KELAS"}
          onPress={() => navigation.navigate("ListKelas")}
        />
        <Gap height={10} />
        <Button
          title={"Detail Pembelajar"}
          onPress={() => navigation.navigate("DetailPembelajar")}
        />
        <Gap height={10} />
        <Button
          title={"Detail Kelas Pembelajar"}
          onPress={() => navigation.navigate("DetailKelasPembelajar")}
        />
        <Gap height={40} />
        {/* <Button
          title={"TEMPORARY LOGOUT"}
          onPress={() => handleSignOut()}
          secondary
        /> */}
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
    fontSize: 28,
    fontWeight: "600",
  },
  innerText: {
    color: Color.solidGreen,
  },
});
