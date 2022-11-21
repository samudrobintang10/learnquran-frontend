import React from "react";
import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import Gap from "../components/atoms/Gap";
import Color from "../utilities/Color";
import Button from "../components/atoms/Button";
import { auth } from "../config/firebase-config";
import { deleteItem, getValueFor } from "../utilities/secureStorage";
import Header from "../components/molecules/Header";
import KartuBelajar from "../components/atoms/KartuBelajar";
import UserAPI from "../services/UserAPI";
import { useEffect } from "react";
import { useState } from "react";
import ClassAPI from "../services/ClassAPI";

export default function LandingPage({ navigation }) {
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const userDataStorage = await getValueFor("userData");
    setUserData(userDataStorage);
  };

  const [allClassByStudent, setAllClassByStudent] = useState([]);
  const getAllClassByStudent = async () => {
    try {
      const { data: response } = await ClassAPI.getAllClassByStudent();
      setAllClassByStudent(response?.results?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setAllClassByStudent([]);
      getAllClassByStudent();
      setUserData({});
      getUserData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.navigate("DetailPembelajar")}
        accountName={userData?.name?.split(" ")[0]}
      />
      <ScrollView style={styles.content}>
        <Gap height={20} />
        <Text style={styles.baseText}>
          Assalamu’alaikum {userData?.name?.split(" ")[0]},
          <Text style={styles.innerText}> Selamat Datang Kembali</Text>
        </Text>
        <Gap height={20} />
        <Text style={styles.baseText}>Mulai Belajar</Text>
        <Gap height={14} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {allClassByStudent.map((item) => {
            return (
              <>
                <KartuBelajar
                  onPress={() =>
                    navigation.navigate("DetailKelasPembelajar", {
                      idClass: item.id,
                    })
                  }
                  kelas={item.name}
                />
                <Gap width={20} />
              </>
            );
          })}
        </ScrollView>
        <Gap height={40} />
        <Button
          title={"Cari Kelas"}
          onPress={() => navigation.navigate("ListKelas")}
        />
        <Gap height={10} />
        {/* <Button
          title={"Ubah Pembelajar"}
          onPress={() => navigation.navigate("UbahPembelajar")}
        />
        <Gap height={10} />
        <Button
          title={"Kelas Diajar"}
          onPress={() => navigation.navigate("ListKelasPengajar")}
        />
        <Gap height={40} /> */}
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
