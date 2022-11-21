import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import KartuProfile from "../components/atoms/KartuProfile";
import KartuDetail from "../components/atoms/KartuDetail";
import Color from "../utilities/Color";
import ButtonRed from "../components/atoms/ButtonSmall";
import BackHeader from "../components/molecules/BackHeader";
import ClassAPI from "../services/ClassAPI";
import { useState, useEffect } from "react";
import CardDetailKelas from "../components/molecules/CardDetailKelas";
import StudentAPI from "../services/StudentAPI";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { getValueFor } from "../utilities/secureStorage";

export default function DetailKelasPembelajar({ navigation, route }) {
  const { idClass } = route.params;

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});
  const getUserData = async () => {
    const userDataStorage = await getValueFor("userData");
    setUserData(userDataStorage);
  };

  const [detailClass, setDetailClass] = useState({});
  const [listTaskOnClass, setListTaskOnClass] = useState([]);
  const getClass = async (id) => {
    dispatch({ type: "SET_LOADING", value: true });
    try {
      const { data: response } = await ClassAPI.getClassById(id);
      setDetailClass(response?.results?.data);
      setListTaskOnClass(response?.results?.data?.tasks);
      dispatch({ type: "SET_LOADING", value: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  const handleEnrollKelas = async (id) => {
    dispatch({ type: "SET_LOADING", value: true });
    StudentAPI.enrollClass(id)
      .then((response) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(
          "Berhasil Enroll",
          "Anda berhasil melakukan enroll ke kelas!",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("LandingPage");
              },
            },
          ]
        );
      })
      .catch((error) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(error.message);
      });
  };

  const handleUnenrollKelas = async (id) => {
    dispatch({ type: "SET_LOADING", value: true });
    StudentAPI.unenrollClass(id)
      .then((response) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(
          "Kelas Telah di Unenroll",
          "Anda berhasil keluar dari kelas!",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.navigate("LandingPage");
              },
            },
          ]
        );
      })
      .catch((error) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(error.message);
      });
  };

  useEffect(() => {
    setUserData({});
    getUserData();
    setDetailClass({});
    getClass(idClass);
  }, [idClass]);

  return (
    <View style={styles.container}>
      <BackHeader
        onPress={() => navigation.goBack()}
        judul={detailClass?.name}
      />
      <Gap height={20} />
      <ScrollView style={styles.content}>
        <CardDetailKelas
          nama={detailClass?.teacher_name}
          handleEnrollKelas={() => handleEnrollKelas(detailClass?.id)}
          handleUnenrollKelas={() => handleUnenrollKelas(detailClass?.id)}
          enrolled={detailClass?.is_enrolled}
          backgroundColor={Color.lightBlue}
          text={Color.lightBlue}
        />
        <Gap height={10} />
        {listTaskOnClass?.map((item) => {
          return (
            <>
              <KartuDetail
                judul={item.name}
                deskripsi={item.description}
                onPress={() =>
                  navigation.navigate("DetailSoal", {
                    idTask: item.id,
                    idStudent: userData.id,
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
