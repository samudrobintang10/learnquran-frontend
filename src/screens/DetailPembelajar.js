import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import KartuProfile from "../components/atoms/KartuProfile";
import KartuDetail from "../components/atoms/KartuDetail";
import Color from "../utilities/Color";
import ButtonRed from "../components/atoms/ButtonSmall";
import SimpleCardHeader from "../components/molecules/SimpleCardHeader";
import BackHeader from "../components/molecules/BackHeader";
import { auth } from "../config/firebase-config";
import { deleteItem } from "../utilities/secureStorage";
import { getValueFor } from "../utilities/secureStorage";
import { useState, useEffect } from "react";
import ClassAPI from "../services/ClassAPI";

export default function DetailPembelajar({ navigation }) {
  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const userDataStorage = await getValueFor("userData");
    setUserData(userDataStorage);
  };

  const [allClassByStudent, setAllClassByStudent] = useState([]);
  const getAllClassByStudent = async () => {
    console.log("TE<AM");
    try {
      const { data: response } = await ClassAPI.getAllClassByStudent();
      setAllClassByStudent(response?.results?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserData({});
    getUserData();
    setAllClassByStudent([]);
    getAllClassByStudent();
  }, []);

  const handleSignOut = () => {
    deleteItem("accessToken");
    deleteItem("userData");
    navigation.replace("Login");
  };
  return (
    <View style={styles.container}>
      <BackHeader onPress={() => navigation.goBack()} judul={"Akun Kamu"} />
      <Gap height={20} />
      <ScrollView style={styles.content}>
        <SimpleCardHeader
          firstHeader={"Assalamualaikum,"}
          secondHeader={userData?.gender === 0 ? "Akhi" : "Ukhti"}
          nama={userData?.name}
          firstButtonText={"Edit Profile"}
          secondButtonText={"Logout"}
          backgroundColor={Color.solidGreen}
          text={Color.solidGreen}
          handleUbahPembelajar={() => navigation.navigate("UbahPembelajar")}
          handleLogout={() => handleSignOut()}
        />
        <Gap height={10} />
        <View>
          <Text style={styles.baseText2}>Kelas yang diikuti</Text>
        </View>
        <Gap height={10} />
        {allClassByStudent.map((item) => {
          return (
            <>
              <KartuDetail
                judul={item?.name}
                deskripsi={item?.teacher_name}
                onPress={() =>
                  navigation.navigate("DetailKelasPembelajar", {
                    idClass: item.id,
                  })
                }
              />
              <Gap height={10} />
            </>
          );
        })}
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
