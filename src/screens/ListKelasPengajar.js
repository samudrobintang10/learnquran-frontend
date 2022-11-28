import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import ButtonSmall from "../components/atoms/ButtonSmall";
import Gap from "../components/atoms/Gap";
import Kartu from "../components/atoms/Kartu";
import KartuDetail from "../components/atoms/KartuDetail";
import BackHeader from "../components/molecules/BackHeader";
import Color from "../utilities/Color";
import { useState, useEffect } from "react";
import ClassAPI from "../services/ClassAPI";

export default function ListKelasPengajar({ navigation }) {
  const [allClassByTeacher, setAllClassByTeacher] = useState([]);
  const getAllClassByTeacher = async () => {
    try {
      const { data: response } = await ClassAPI.getAllClassByTeacher();
      setAllClassByTeacher(response?.results?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAllClassByTeacher([]);
    getAllClassByTeacher();
  }, []);

  return (
    <View style={styles.container}>
      <BackHeader
        onPress={() => navigation.goBack()}
        judul={"Kelas Pengajar"}
      />
      <Gap height={10} />
      <ScrollView style={styles.content}>
        <View style={styles.content2}>
          <ButtonSmall
            title={"Buat Kelas"}
            onPress={() => navigation.navigate("BuatKelas")}
          />
          <Gap height={10} />
        </View>
        {allClassByTeacher.map((item) => {
          return (
            <>
              <KartuDetail
                judul={item?.name}
                deskripsi={item?.teacher_name}
                onPress={() =>
                  navigation.navigate("DetailKelasPengajar", {
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
  content2: {
    alignItems: "flex-end",
    paddingLeft: 16,
    paddingRight: 16,
  },
  baseText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  firstrow: {
    flex: 0.125,
    backgroundColor: Color.solidGreen,
    justifyContent: "center",
    alignItems: "center",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
});
