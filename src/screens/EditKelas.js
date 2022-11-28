import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import Color from "../utilities/Color";
import Kelas from "../components/molecules/Kelas";
import BackHeader from "../components/molecules/BackHeader";
import { useDispatch } from "react-redux";
import ClassAPI from "../services/ClassAPI";
import { Alert } from "react-native";
import { useState } from "react";
import { useEffect } from "react";

export default function EditKelas({ navigation, route }) {
  const dispatch = useDispatch();
  const { idClass } = route.params;
  const [namaKelas, setNamaKelas] = useState();
  const [kapasitas, setKapasitas] = useState();

  const handleKelasUbah = async () => {
    dispatch({ type: "SET_LOADING", value: true });
    ClassAPI.editClass(idClass, namaKelas, kapasitas)
      .then((response) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(
          "Berhasil Mengubah Kelas",
          "Anda berhasil mengubah data kelas!",
          [
            {
              text: "OK",
              onPress: () => {
                navigation.goBack();
              },
            },
          ]
        );
      })
      .catch((error) => {
        dispatch({ type: "SET_LOADING", value: false });
        console.log(error)
        Alert.alert(error.message);
      });
  };

  const getClass = async (id) => {
    dispatch({ type: "SET_LOADING", value: true });
    try {
      const { data: response } = await ClassAPI.getClassById(id);
      setNamaKelas(response?.results?.data?.name);
      setKapasitas(response?.results?.data?.capacity);
      dispatch({ type: "SET_LOADING", value: false });
    } catch (error) {
      console.log(error);
      dispatch({ type: "SET_LOADING", value: false });
    }
  };

  useEffect(() => {
    getClass(idClass);
  }, [idClass]);

  return (
    <View style={styles.container}>
      <BackHeader onPress={() => navigation.goBack()} judul={"Ubah Kelas"} />
      <Gap height={20} />
      <ScrollView style={styles.content}>
        <Kelas
          handleKelas={handleKelasUbah}
          name={namaKelas}
          total_student={kapasitas?.toString()}
          handleKapasitas={(num) => setKapasitas(num)}
          handleNamaKelas={(text) => setNamaKelas(text)}
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
