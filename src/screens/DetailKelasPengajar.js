import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Button from "../components/atoms/Button";
import Gap from "../components/atoms/Gap";
import KartuProfile from "../components/atoms/KartuProfile";
import KartuDetail from "../components/atoms/KartuDetail";
import Color from "../utilities/Color";
import ButtonSmall from "../components/atoms/ButtonSmall";
import ButtonOuter from "../components/atoms/ButtonOuter";
import BackHeader from "../components/molecules/BackHeader";
import { useState, useEffect } from "react";
import ClassAPI from "../services/ClassAPI";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";

export default function DetailKelasPengajar({ navigation, route }) {
  const { idClass } = route.params;
  const dispatch = useDispatch();
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

  const handleHapusKelas = async () => {
    dispatch({ type: "SET_LOADING", value: true });
    ClassAPI.deleteClass(idClass)
      .then((response) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert("Berhasil Menghapus", "Anda berhasil menghapus kelas!", [
          {
            text: "OK",
            onPress: () => {
              navigation.goBack();
            },
          },
        ]);
      })
      .catch((error) => {
        dispatch({ type: "SET_LOADING", value: false });
        Alert.alert(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setDetailClass({});
      setListTaskOnClass([]);
      getClass(idClass);
    });

    return unsubscribe;
  }, [idClass]);
  return (
    <View style={styles.container}>
      <BackHeader
        onPress={() => navigation.goBack()}
        judul={"Detail " + detailClass.name}
      />
      <Gap height={20} />
      <ScrollView style={styles.content}>
        <View style={styles.row}>
          <ButtonOuter
            title={"Edit Kelas"}
            backgroundColor={Color.solidGreen}
            text={Color.solidGreen}
            onPress={() =>
              navigation.navigate("EditKelas", {
                idClass: idClass,
              })
            }
          />
          <Gap width={20} />
          <ButtonSmall
            style={styles.buttonKecil}
            title={"Hapus Kelas"}
            danger
            onPress={handleHapusKelas}
          />
        </View>
        <Gap height={20} />
        <Text>Daftar Soal</Text>
        <Gap height={20} />
        {listTaskOnClass?.map((item) => {
          return (
            <>
              <KartuDetail
                judul={item.name}
                deskripsi={item.description}
                onPress={() =>
                  navigation.navigate("EditSoal", {
                    idTask: item.id,
                    idClass: idClass,
                    name: item.name,
                    description: item.description,
                  })
                }
                teritary
                buttonName="Detail"
              />
              <Gap height={10} />
            </>
          );
        })}
        <Gap height={10} />
        <View style={styles.row}>
          <ButtonSmall
            title={"Tambah Soal"}
            TheGreens
            onPress={() =>
              navigation.navigate("TambahSoal", {
                idClass: idClass,
              })
            }
          />
        </View>
        <Gap height={20} />
        <Text>Daftar Pembelajar</Text>
        <Gap height={20} />
        {detailClass?.Students?.map((item) => {
          console.log(item);
          return (
            <KartuDetail
              judul={item.name}
              onPress={() =>
                navigation.navigate("SubmisiPelajar", {
                  idStudent: item?.StudentAndClass?.student_id,
                  idClass: idClass,
                })
              }
              teritary
              buttonName="Detail"
            />
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
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
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
